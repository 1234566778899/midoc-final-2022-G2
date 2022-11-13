import { NotificacionService } from './../../services/notificacion/notificacion.service';
import { FarmaciasService } from './../../services/farmacias/farmacias.service';
import { Farmacia } from './../../moduls/farmacias';
import { Notificacion } from './../../moduls/notificacion';
import { ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  visible = false;
  id!: number;
  farmacia!: Farmacia;
  notificaciones: Notificacion[] = [];
  constructor(private activetedRoute: ActivatedRoute,
    private farmaciaService: FarmaciasService, private notificacionService: NotificacionService) { }

  ngOnInit(): void {
    this.id = this.activetedRoute.snapshot.params['id'];
    this.farmaciaService.getFarmacia(this.id).subscribe(
      (data: Farmacia) => {
        this.farmacia = data;
      }
    )

    this.getNotificaciones();

  }
  abrirMenu(): void {
    this.visible = true;
  }
  cerrarMenu(): void {
    this.visible = false;
  }

  getNotificaciones() {
    this.notificacionService.getNotificaciones(this.id).subscribe(
      (data: Notificacion[]) => {
        this.notificaciones = data;
      }
    )
  }


}
