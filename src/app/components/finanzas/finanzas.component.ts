import { VentasService } from './../../services/ventas/ventas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finanzas',
  templateUrl: './finanzas.component.html',
  styleUrls: ['./finanzas.component.css']
})
export class FinanzasComponent implements OnInit {
  total: number = 0;
  url = '';
  constructor(private ordenService: VentasService) { }

  ngOnInit(): void {
    let f1 = new Date();
    let f2 = new Date();
    f1.setDate(f1.getDate() - 1);
    f2.setDate(f2.getDate() + 1);

    this.url = 'http://localhost:8080/api/ordenes/ingresos/' + f1 + '/' + f2;
   

    this.ordenService.totalIngresosEntreVenta(f1, f2).subscribe(
      (data: any) => {
        this.total = data;
        console.log(data);
      }
    )


  }

}
