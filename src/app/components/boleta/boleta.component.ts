import { ActivatedRoute, Router } from '@angular/router';
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
  idOrden!: number;
  idFarmacia!: number;
  texto!: string;
  constructor(private ordenService: VentasService, private activated: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.idOrden = this.activated.snapshot.params['id_orden'];
    this.idFarmacia = this.activated.snapshot.params['id'];
    this.ordenService.getVenta(this.idOrden).subscribe(
      (data: Orden) => {
        this.orden = data;
      }
    )
    this.numeroToTexto();
  }

  numeroToTexto() {
    this.ordenService.convertirNumeroTexto(112).subscribe(
      (data: any) => {
        this.texto = data;
        console.log(data);
      }
    )
  }
  imprimir() {
    let botones = document.querySelector('#botones');
    botones?.remove();
    window.print();
    this.router.navigate(['/detalleVentas/' + this.idFarmacia])
  }



}
