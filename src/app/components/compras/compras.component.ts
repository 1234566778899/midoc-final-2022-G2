import { ComprasService } from './../../services/compras/compras.service';
import { Compra } from './../../moduls/compra';
import { ProductosService } from './../../services/productos/productos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from './../../moduls/producto';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {

  myControl = new FormControl('');
  options: Producto[] = [];
  filteredOptions!: Observable<Producto[]>;
  idFarmacia!: number;
  idProducto!: number;
  compras: Compra[] = [];
  myform !: FormGroup;
  constructor(private formBuilder: FormBuilder, private activated: ActivatedRoute,
    private productoService: ProductosService, private compraService: ComprasService,
    private router:Router) {

  }
  ngOnInit() {
    this.loadMyForm();
    this.idFarmacia = this.activated.snapshot.params['id'];
    this.getProductos();
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''), map(value => this._filter(value || '')),
    );
  }

  enviarCompras() {
    for (let i = 0; i < this.compras.length; i++) {
      this.compraService.addCompra(this.compras[i]).subscribe({
        next: (data) => {
          console.log(data);
        },
        error: e => {
          console.log(e);
        }
      })
    }

    setTimeout(() => {
      this.router.navigate([`/inventario/${this.idFarmacia}`]);
    }, 1000);
  }

  private _filter(value: string): Producto[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.nombre.toLowerCase().includes(filterValue) ||
      option.presentacion.toLowerCase().includes(filterValue));
  }

  loadMyForm() {
    this.myform = this.formBuilder.group({
      precio: ['', [Validators.required]],
      cantidad: ['', [Validators.required]],
      fecha: ['', [Validators.required]]
    })
  }

  getProductos() {
    this.productoService.getProductos().subscribe(
      (data: Producto[]) => {
        this.options = data;
      }
    )
  }

  getNombre(id: number) {
    for (let i = 0; i < this.options.length; i++) {
      if (this.options[i].id == id) return this.options[i].nombre + ' ,' + this.options[i].presentacion;
    }
    return 'No se encontro el producto'
  }
  conseguirProducto(data: Producto) {
    this.idProducto = data.id;
  }

  agregarLista() {

    let _total: number = parseFloat(this.myform.get('cantidad')?.value) * parseFloat(this.myform.get('precio')?.value);
    let compra: Compra = {
      id: 0,
      id_farmacia: this.idFarmacia,
      id_producto: this.idProducto,
      precio_unidad: this.myform.get('precio')?.value,
      cantidad: this.myform.get('cantidad')?.value,
      total: _total,
      registrado: false,
      fecha: this.myform.get('fecha')?.value
    }
    this.compras.push(compra);
    this.myControl.setValue('');
    this.myform.get('cantidad')?.setValue('');
    this.myform.get('precio')?.setValue('');
  }

  quitarLista(compra: Compra) {
    let indice = this.compras.indexOf(compra);
    this.compras.splice(indice, 1);
  }

  getTotal() {
    let total: number = 0;
    for (let i = 0; i < this.compras.length; i++) {
      total += this.compras[i].total;
    }
    return total;
  }

}
