import { ActivatedRoute } from '@angular/router';
import { StocksService } from './../../services/stocks/stocks.service';
import { Stock } from './../../moduls/stock';
import { FarmaciasService } from './../../services/farmacias/farmacias.service';
import { Farmacia } from './../../moduls/farmacias';
import { Producto } from './../../moduls/producto';
import { ProductosService } from './../../services/productos/productos.service';
import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {

  displayedColumns: string[] = ['producto','presentacion', 'tipo', 'proveedor', 'recetado', 'cantidad', 'compra', 'venta', 'edit', 'delete'];
  dataSource!: MatTableDataSource<Stock>;
  stock: Stock[] = [];
  idFarmacia!: number;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(private stockService: StocksService, private activated: ActivatedRoute) { }


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

  eliminar() {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
       Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }
}
