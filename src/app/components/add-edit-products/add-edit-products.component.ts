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
  stocks: Stock[] = [];
  constructor(private productoService: ProductosService, private formBuilder: FormBuilder,
    private activated: ActivatedRoute, private stockService: StocksService, private router: Router) { }

  ngOnInit(): void {
    this.idFarmacia = this.activated.snapshot.params['id'];
    this.getProductos();
    this.getStock();

    setTimeout(() => {
      console.log(this.options);
      this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''), map(value => this._filter(value || '')),
      );
    }, 1000);


    this.reactiveForm();
  }

  getStock() {
    this.stockService.getSock(this.idFarmacia).subscribe(
      (data: Stock[]) => {
        this.stocks = data;
      }
    )
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
  entontrarCompra(id: number): Stock {
    for (let i = 0; i < this.stocks.length; i++) {
      if (this.stocks[i].producto.id == id) return this.stocks[i];
    }
    return this.stocks[0];
  }

  private _filter(value: string) {

    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.nombre.toLowerCase().includes(filterValue) ||
      option.presentacion.toLowerCase().includes(filterValue));

  }
  getProductos() {
    this.productoService.getProductos().subscribe(
      (data: any) => {
        this.productos = data;
      }
    )
  }
  conseguirProducto(data: Producto) {

    let presentacion = document.querySelector('#presentacion') as HTMLInputElement;
    let tipo = document.querySelector('#tipo') as HTMLInputElement;
    let fabricante = document.querySelector('#fabricante') as HTMLInputElement;
    let condicion = document.querySelector('#condicion') as HTMLInputElement;
    let descripcion = document.querySelector('#descripcion') as HTMLInputElement;


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
