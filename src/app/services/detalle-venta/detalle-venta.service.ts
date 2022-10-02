import { Venta } from './../../moduls/ventas';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetalleVentaService {

  constructor(private http: HttpClient) { }


}
