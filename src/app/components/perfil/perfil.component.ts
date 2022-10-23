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
  myForm!: FormGroup;
  constructor(private activated: ActivatedRoute, private farmaciaService: FarmaciasService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.id = this.activated.snapshot.params['id'];
    this.reactiveForm();
    this.cargarDatos();
  }

  cargarDatos() {
    this.farmaciaService.getFarmacia(this.id).subscribe(
      (data: Farmacia) => {
        console.log(data);
        this.myForm.get('nombreFarmacia')?.setValue(data.nombreFarmacia);
        this.myForm.get('ruc')?.setValue(data.ruc);
        this.myForm.get('departamento')?.setValue(data.departamento);
        this.myForm.get('provincia')?.setValue(data.provincia);
        this.myForm.get('distrito')?.setValue(data.distrito);
        this.myForm.get('nombre')?.setValue(data.nombre);
        this.myForm.get('apellido')?.setValue(data.apellido);
        this.myForm.get('telefono')?.setValue(data.telefono);
        this.myForm.get('correo')?.setValue(data.correo);
      }
    )

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
