import { ProductosService } from './../../services/productos/productos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.css']
})
export class PruebasComponent implements OnInit {

  result!: any;
  constructor(private productoService: ProductosService) { }

  ngOnInit(): void {
    this.productoService.getProductos().subscribe(
      (data) => {
        console.log(data);
        this.result = data;
      }
    )
  }

}
