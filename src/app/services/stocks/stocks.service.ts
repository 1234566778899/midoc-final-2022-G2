import { Stock } from './../../moduls/stock';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StocksService {

  constructor(private http: HttpClient) { }

  getSock() {
    return this.http.get<Stock[]>('http://localhost:3000/stocks');
  }

  addStock(stock: Stock) {
    return this.http.post<Stock>('http://localhost:3000/stocks', stock);
  }
}
