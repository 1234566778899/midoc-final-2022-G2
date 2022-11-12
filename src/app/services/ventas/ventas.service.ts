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

  getVenta(id: number) {
    return this.http.get<Orden>('http://localhost:8080/api/ordenes/detalle/' + id);
  }

  addVenta(venta: Orden) {
    return this.http.post<Orden>('http://localhost:8080/api/ordenes', venta);
  }
  getIngresosYCantidad(id: number, inicio: Date, fin: Date) {
    return this.http.get('http://localhost:8080/api/ordenes/ingresos/' + id + '/' + inicio + "/" + fin);
  }
  getReporteSemanal(id: number, inicio: Date, fin: Date) {
    return this.http.get('http://localhost:8080/api/ordenes/reporte/semanal/' + id + '/' + inicio + "/" + fin);
  }

  getUltimos3Dias(idFarmacia: number) {
    return this.http.get<Orden[]>('http://localhost:8080/api/ordenes/ultimos/' + idFarmacia);
  }
  deleteOrden(id: number) {
    return this.http.delete('http://localhost:8080/api/ordenes/' + id);
  }
}
