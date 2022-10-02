import { Cliente } from './../../moduls/cliente';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http:HttpClient) { }

  getClientes(){
    return this.http.get<Cliente[]>('http://localhost:3000/clientes');
  }

}
