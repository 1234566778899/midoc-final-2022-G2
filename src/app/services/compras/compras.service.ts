import { Compra } from './../../moduls/compra';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComprasService {

  constructor(private http: HttpClient) {

  }

  addCompra(compra: Compra) {
    return this.http.post<Compra>('http://localhost:8080/api/compras', compra);
  }

  getCompras(){
    return this.http.get<Compra[]>('http://localhost:3000/compras');
  }
}
