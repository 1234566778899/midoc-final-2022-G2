import { Orden } from '../../moduls/orden';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VentasService {

  constructor(private http: HttpClient) { }

  getVentas(idFarmacia: number) {
    return this.http.get<Orden[]>('http://localhost:8080/api/ordenes/' + idFarmacia);
  }

  addVenta(venta: Orden) {
    return this.http.post<Orden>('http://localhost:8080/api/ordenes', venta);
  }
  totalIngresosEntreVenta(inicio: Date, fin: Date) {
    return this.http.get('http://localhost:8080/api/ordenes/ingresos/' + inicio + "/" + fin);
  }
}
