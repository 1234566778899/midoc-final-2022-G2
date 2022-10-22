import { FormGroup, FormBuilder } from '@angular/forms';
import { Farmacia } from './../../moduls/farmacias';
import { FarmaciasService } from './../../services/farmacias/farmacias.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  id!: number;
  farmacia!: Farmacia;
  myForm!: FormGroup;
  constructor(private activated: ActivatedRoute, private farmaciaService: FarmaciasService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.id = this.activated.snapshot.params['id'];
    this.reactiveForm();
    this.farmaciaService.getFarmacia(this.id).subscribe(
      (data: Farmacia) => {
        this.farmacia = data;
      }
    )

    setTimeout(() => {
      this.cargarDatos();
    }, 500);
  }

  cargarDatos() {
    this.myForm.get('nombreFarmacia')?.setValue(this.farmacia.nombreFarmacia);
    this.myForm.get('ruc')?.setValue(this.farmacia.ruc);
    this.myForm.get('departamento')?.setValue(this.farmacia.departamento);
    this.myForm.get('provincia')?.setValue(this.farmacia.provincia);
    this.myForm.get('distrito')?.setValue(this.farmacia.distrito);
    this.myForm.get('nombre')?.setValue(this.farmacia.nombre);
    this.myForm.get('apellido')?.setValue(this.farmacia.apellido);
    this.myForm.get('telefono')?.setValue(this.farmacia.telefono);
    this.myForm.get('correo')?.setValue(this.farmacia.correo);
  }
  reactiveForm() {
    this.myForm = this.formBuilder.group({
      nombreFarmacia: [''],
      ruc: [''],
      departamento: [''],
      provincia: [''],
      distrito: [''],
      nombre: [''],
      apellido: [''],
      telefono: [''],
      correo: [''],
      password: [''],
      confPassword: ['']
    })
  }




}
