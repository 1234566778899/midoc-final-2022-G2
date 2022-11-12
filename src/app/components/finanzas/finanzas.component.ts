import { ActivatedRoute } from '@angular/router';
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
  id!: number;
  url = '';
  constructor(private ordenService: VentasService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    let inicio = new Date();
    let fin = new Date();

    console.log('id: ' + this.id);
  }

}
