import { Venta } from './../../moduls/ventas';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VentasService {

  constructor(private http: HttpClient) { }

  getVentas() {
    return this.http.get<Venta[]>('http://localhost:3000/ventas');
  }

  addVenta(venta: Venta) {
    return this.http.post<Venta>('http://localhost:3000/ventas', venta);
  }
}
