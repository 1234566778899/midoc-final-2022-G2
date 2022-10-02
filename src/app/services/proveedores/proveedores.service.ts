import { Producto } from 'src/app/moduls/producto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

  constructor(private http:HttpClient) { 

  }
  getProducto(){
    return this.http.get<Producto[]>('http://localhost:3000/productos');
  }
}
