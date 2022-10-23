import { ProductoStock } from './../../moduls/ProductoStock';
import { StocksService } from './../../services/stocks/stocks.service';
import { Stock } from './../../moduls/stock';
import { ProductosService } from './../../services/productos/productos.service';
import { Producto } from './../../moduls/producto';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {

  id!: number;
  displayedColumns: string[] = ['producto', 'tipo', 'proveedor', 'condicion', 'stock', 'disponibles', 'precio', 'accion'];
  dataSource!: MatTableDataSource<Stock>;

  constructor(private formBuilder: FormBuilder,
    private activetedRoute: ActivatedRoute,
    private stockService: StocksService) { }


  ngOnInit(): void {
    this.id = this.activetedRoute.snapshot.params['id'];
    this.getStock();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getStock() {
    this.stockService.getSock(this.id).subscribe(
      (data: Stock[]) => {
        this.dataSource = new MatTableDataSource(data);
      }
    )
  }
}
