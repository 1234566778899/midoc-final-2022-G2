import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from 'src/app/moduls/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http:HttpClient) { }

  getProductos(){
    return this.http.get<Producto[]>('http://localhost:3000/productos');
  }
}
