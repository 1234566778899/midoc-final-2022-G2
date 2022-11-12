import { ActivatedRoute } from '@angular/router';
import { VentasService } from './../../services/ventas/ventas.service';
import { Orden } from './../../moduls/orden';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boleta',
  templateUrl: './boleta.component.html',
  styleUrls: ['./boleta.component.css']
})
export class BoletaComponent implements OnInit {
  orden!: Orden;
  constructor(private ordenService: VentasService) { }

  ngOnInit(): void {
    this.ordenService.getVenta(1).subscribe(
      (data: Orden) => {
        this.orden = data;
        console.log(data);
      }
    )
  }

}
