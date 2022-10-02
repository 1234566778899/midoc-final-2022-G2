import { Consulta } from './../../moduls/consulta';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ConsultasService {

  constructor(private http: HttpClient) { }

  addConsulta(consulta: Consulta) {
    return this.http.post<Consulta>('http://localhost:3000/consultas', consulta);
  }
}
