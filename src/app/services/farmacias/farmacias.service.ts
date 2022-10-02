import { Farmacia } from './../../moduls/farmacias';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FarmaciasService {

  constructor(private http: HttpClient) { }

  getFarmacias() {
    return this.http.get<Farmacia[]>('http://localhost:3000/farmacias');
  }

  getFarmacia(id: number) {
    return this.http.get<Farmacia>(`http://localhost:3000/farmacias/${id}`);
  }

  addFarmacia(farmacia:Farmacia){
    return this.http.post<Farmacia>("http://localhost:3000/farmacias",farmacia);
  }
}
