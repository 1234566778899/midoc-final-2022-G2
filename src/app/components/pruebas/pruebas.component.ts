import { ActivatedRoute } from '@angular/router';
import { StocksService } from './../../services/stocks/stocks.service';
import { Stock } from './../../moduls/stock';
import { FarmaciasService } from './../../services/farmacias/farmacias.service';
import { Farmacia } from './../../moduls/farmacias';
import { Producto } from './../../moduls/producto';
import { ProductosService } from './../../services/productos/productos.service';
import { Component, OnInit } from '@angular/core';

import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.css']
})
export class PruebasComponent implements OnInit {

  displayedColumns: string[] = ['producto', 'tipo', 'proveedor', 'recetado', 'cantidad', 'compra', 'venta'];
  dataSource!: MatTableDataSource<Stock>;
  stock: Stock[] = [];
  idFarmacia!: number;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(private stockService: StocksService, private activated: ActivatedRoute) {
  }
  ngOnInit() {
    this.idFarmacia = this.activated.snapshot.params['id'];
    this.stockService.getSock(this.idFarmacia).subscribe(
      (data: Stock[]) => {
        this.dataSource = new MatTableDataSource(data);
      }
    )
    
  }
  AfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

