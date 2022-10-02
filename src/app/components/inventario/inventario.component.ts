import { Compra } from './../../moduls/compra';
import { ProductoStock } from './../../moduls/ProductoStock';
import { StocksService } from './../../services/stocks/stocks.service';
import { Stock } from './../../moduls/stock';
import { ProductosService } from './../../services/productos/productos.service';
import { Producto } from './../../moduls/producto';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { ComprasService } from 'src/app/services/compras/compras.service';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {

  myform!: FormGroup;
  id!: number;
  productos: Producto[] = [];
  stocks: Stock[] = [];
  productoStock: ProductoStock[] = [];
  displayedColumns: string[] = ['producto', 'tipo', 'proveedor', 'condicion', 'stock', 'disponibles', 'precio', 'accion'];
  dataSource!: MatTableDataSource<ProductoStock>;

  constructor(private formBuilder: FormBuilder,
    private activetedRoute: ActivatedRoute,
    private productosService: ProductosService,
    private stockService: StocksService,
    private comprasService: ComprasService) { }


  ngOnInit(): void {
    this.loadMyForm();
    this.id = this.activetedRoute.snapshot.params['id'];
    this.getProductos();
    this.getStock();
    setTimeout(() => {
      this.llenarTabla();
      this.dataSource = new MatTableDataSource(this.productoStock);
      console.log(this.productoStock);
    }, 500);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  llenarTabla() {
    for (let i = 0; i < this.productos.length; i++) {
      for (let j = 0; j < this.stocks.length; j++) {
        if (this.stocks[j].id_farmacia == this.id && this.stocks[j].id_producto == this.productos[i].id) {
          let fila: ProductoStock = {
            nombre: this.productos[i].nombre,
            registro_sanitario: this.productos[i].registro_sanitario,
            presentacion: this.productos[i].presentacion,
            tipo: this.productos[i].tipo,
            esRecetado: this.productos[i].esRecetado,
            descripcion: this.productos[i].descripcion,
            cantidad_unidad: this.stocks[j].cantidad_unidad,
            precio_unitario: this.stocks[j].precio_unitario
          }
          this.productoStock.push(fila);
        }
      }
    }

    console.log(this.productoStock.length);
  }
  loadMyForm() {
    this.myform = this.formBuilder.group({
      name: ['', Validators.required]
    })
  }

  getStock() {
    this.stockService.getSock().subscribe(
      (data: Stock[]) => {
        this.stocks = data;
        console.log(data);
      }
    )
  }
  getProductos() {
    this.productosService.getProductos().subscribe(
      (data: Producto[]) => {
        this.productos = data;
        console.log(data);
      }
    )
  }


}
