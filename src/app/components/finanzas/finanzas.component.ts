import { VentasService } from './../../services/ventas/ventas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finanzas',
  templateUrl: './finanzas.component.html',
  styleUrls: ['./finanzas.component.css']
})
export class FinanzasComponent implements OnInit {
  total: number = 0;
  cantidad: number = 0;
  url = '';
  constructor(private ordenService: VentasService) { }

  ngOnInit(): void {
    let f1 = new Date();
    let f2 = new Date();
    f1.setDate(f1.getDate() - 1);
    f2.setDate(f2.getDate() + 1);

    this.ordenService.totalIngresosEntreVenta(f1, f2).subscribe(
      (data: any) => {
        this.total = data;
      }
    )

    this.ordenService.cantidadVentasEntreVenta(f1, f2).subscribe(
      (data: any) => {
        this.cantidad = data;
      }
    )


  }

}
