import { Farmacia } from './../../moduls/farmacias';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FarmaciasService {
  farmacias: Farmacia[]=[];
  constructor(private http: HttpClient) { }

  getFarmacias() {
    return this.http.get<Farmacia[]>('http://localhost:8080/api/farmacias');
  }

  getFarmacia(id: number) {
    return this.http.get<Farmacia>(`http://localhost:8080/api/farmacias/${id}`);
  }

  addFarmacia(farmacia:Farmacia){
    return this.http.post<Farmacia>("http://localhost:8080/api/farmacias",farmacia);
  }
  updateFarmacia(farmacia:Farmacia){
    return this.http.put<Farmacia>("http://localhost:8080/api/farmacias",farmacia);
  }
}
