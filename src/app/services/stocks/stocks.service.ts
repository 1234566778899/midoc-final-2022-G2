import { Stock } from './../../moduls/stock';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StocksService {

  constructor(private http: HttpClient) { }

  getSock(idFarmacia: number) {
    return this.http.get<Stock[]>('http://localhost:8080/api/stock/' + idFarmacia);
  }

  addStock(stock: Stock) {
    return this.http.post<Stock>('http://localhost:8080/api/stock', stock);
  }
}
