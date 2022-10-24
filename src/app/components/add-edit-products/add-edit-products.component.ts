import { StocksService } from './../../services/stocks/stocks.service';
import { Stock } from './../../moduls/stock';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from './../../services/productos/productos.service';
import { Producto } from './../../moduls/producto';
import { startWith, map } from 'rxjs/operators';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-edit-products',
  templateUrl: './add-edit-products.component.html',
  styleUrls: ['./add-edit-products.component.css']
})
export class AddEditProductsComponent implements OnInit {
  checked = false;
  idFarmacia!: number;
  stock!: Stock;
  constructor(private activated: ActivatedRoute, private stockService: StocksService, private router: Router) { }

  ngOnInit(): void {
    this.idFarmacia = this.activated.snapshot.params['id'];
    let id_stock = this.activated.snapshot.params['id_stock'];
    this.stockService.getOneStock(id_stock).subscribe(
      (data: Stock) => {
        this.stock = data;
      }
    )

  }



}
