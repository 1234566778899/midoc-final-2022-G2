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
  filteredOptions!: Observable<any>;
  idFarmacia!: number;
  idProducto!: number;
  compras: Compra[] = [];
  myform !: FormGroup;
  constructor(private formBuilder: FormBuilder, private activated: ActivatedRoute,
    private productoService: ProductosService, private compraService: ComprasService,
    private router: Router) {

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
  }

  private _filter(value: string){
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
      (data) => {
        //this.options = data;
        console.log('productos: ', data);
      }
    )
  }

  getNombre(id: number) {
    for (let i = 0; i < this.options.length; i++) {
      if (this.options[i].id == id) return this.options[i].nombre + ' ,' + this.options[i].presentacion;
    }
    return 'No se encontro el producto'
  }
  conseguirProducto(data: any) {
    this.idProducto = data.id;
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
