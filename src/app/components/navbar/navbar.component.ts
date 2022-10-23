import { FarmaciasService } from './../../services/farmacias/farmacias.service';
import { Farmacia } from './../../moduls/farmacias';
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
  constructor(private activetedRoute: ActivatedRoute,
    private farmaciaService: FarmaciasService) { }

  ngOnInit(): void {
    this.id = this.activetedRoute.snapshot.params['id'];
    this.farmaciaService.getFarmacia(this.id).subscribe(
      (data: Farmacia) => {
        this.farmacia = data;
      }
    )

  }
  abrirMenu(): void {
    this.visible = true;
  }
  cerrarMenu(): void {
    this.visible = false;
  }
}
