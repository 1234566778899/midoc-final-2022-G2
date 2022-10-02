import { Compra } from './../../moduls/compra';
import { ComprasService } from './../../services/compras/compras.service';
import { StocksService } from './../../services/stocks/stocks.service';
import { Stock } from './../../moduls/stock';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from './../../services/productos/productos.service';
import { Producto } from './../../moduls/producto';
import { startWith, map } from 'rxjs/operators';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-edit-products',
  templateUrl: './add-edit-products.component.html',
  styleUrls: ['./add-edit-products.component.css']
})
export class AddEditProductsComponent implements OnInit {
  myControl = new FormControl('');
  options: Producto[] = [];
  productos: Producto[] = [];
  filteredOptions!: Observable<Producto[]>;
  myForm!: FormGroup;
  idFarmacia!: number;
  idProducto!: number;
  compras: Compra[] = [];
  constructor(private productoService: ProductosService, private formBuilder: FormBuilder,
    private activated: ActivatedRoute, private stockService: StocksService, private router: Router,
    private comprasService: ComprasService) { }

  ngOnInit(): void {
    this.idFarmacia = this.activated.snapshot.params['id'];
    this.getProductos();
    this.getCompras();

    setTimeout(() => {
      this.llenarCombo();
      console.log(this.options);
      this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''), map(value => this._filter(value || '')),
      );
    }, 1000);


    this.reactiveForm();
  }

  getCompras() {
    this.comprasService.getCompras().subscribe(
      (data: Compra[]) => {
        this.compras = data;
      }
    )
  }

  llenarCombo() {
    for (let i = 0; i < this.compras.length; i++) {
      for (let j = 0; j < this.productos.length; j++) {
        if (this.compras[i].id_farmacia == this.idFarmacia && this.compras[i].id_producto == this.productos[j].id) {
          this.options.push(this.productos[j]);
        }
      }
    }
  }
  reactiveForm() {
    this.myForm = this.formBuilder.group(
      {
        producto: [''],
        precio: ['', [Validators.required]],
        cantidad: ['', [Validators.required]]
      }
    )
  }
  entontrarCompra(id: number): Compra {
    for (let i = 0; i < this.compras.length; i++) {
      if (this.compras[i].id_producto == id) return this.compras[i];
    }
    return this.compras[0];
  }
  agregarStock() {
    if (this.idProducto == undefined) {
      alert('Debe completar los campos');
    } else {
      if (this.entontrarCompra(this.idProducto).cantidad >= this.myForm.get('cantidad')?.value) {
        let element: Stock = {
          id: 0,
          id_farmacia: this.idFarmacia,
          id_producto: this.idProducto,
          cantidad_unidad: this.myForm.get('cantidad')?.value,
          precio_unitario: this.myForm.get('precio')?.value
        }
        this.stockService.addStock(element).subscribe({
          next: (data: Stock) => {
            this.router.navigate(['/inventario/' + this.idFarmacia]);
          },
          error: (e) => {
            console.log(e);
          }
        })
      } else {
        alert('Cantidad maxima: ' + this.entontrarCompra(this.idProducto).cantidad);
      }
    }

  }
  private _filter(value: string): Producto[] {

    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.nombre.toLowerCase().includes(filterValue) ||
      option.presentacion.toLowerCase().includes(filterValue));

  }
  getProductos() {
    this.productoService.getProductos().subscribe(
      (data: Producto[]) => {
        this.productos = data;
      }
    )
  }
  conseguirProducto(data: Producto) {

    let registro = document.querySelector('#registro') as HTMLInputElement;
    let presentacion = document.querySelector('#presentacion') as HTMLInputElement;
    let tipo = document.querySelector('#tipo') as HTMLInputElement;
    let fabricante = document.querySelector('#fabricante') as HTMLInputElement;
    let condicion = document.querySelector('#condicion') as HTMLInputElement;
    let descripcion = document.querySelector('#descripcion') as HTMLInputElement;

    registro.value = data.registro_sanitario;
    presentacion.value = data.presentacion;
    tipo.value = data.tipo;
    fabricante.value = 'PFIZER';
    if (data.esRecetado) {
      condicion.value = 'Es recetado';
    } else {
      condicion.value = "No es recetado";
    }
    descripcion.value = data.descripcion;
    this.idProducto = data.id;
  }
}
