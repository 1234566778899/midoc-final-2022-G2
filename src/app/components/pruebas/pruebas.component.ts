import { StocksService } from './../../services/stocks/stocks.service';
import { Stock } from './../../moduls/stock';
import { FarmaciasService } from './../../services/farmacias/farmacias.service';
import { Farmacia } from './../../moduls/farmacias';
import { Producto } from './../../moduls/producto';
import { ProductosService } from './../../services/productos/productos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.css']
})
export class PruebasComponent implements OnInit {

  result: Producto[] = [];
  farmacia!: Farmacia;
  constructor(private productoService: ProductosService, private farmaciaService: FarmaciasService,
    private stockService: StocksService) { }

  ngOnInit(): void {
    this.productoService.getProductos().subscribe(
      (data) => {
        console.log(data);
        this.result = data;
      }
    )

    this.farmaciaService.getFarmacia(1).subscribe(
      (data: Farmacia) => {
        console.log(data);
        this.farmacia = data;
      }
    )
  }



}
