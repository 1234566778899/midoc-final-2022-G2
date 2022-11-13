import { FormGroup, FormBuilder } from '@angular/forms';
import { Farmacia } from './../../moduls/farmacias';
import { FarmaciasService } from './../../services/farmacias/farmacias.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ContentObserver } from '@angular/cdk/observers';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  id!: number;
  myForm!: FormGroup;
  farmacia!: Farmacia;
  constructor(private activated: ActivatedRoute, private farmaciaService: FarmaciasService,
    private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.id = this.activated.snapshot.params['id'];
    this.reactiveForm();
    this.cargarDatos();
  }

  cargarDatos() {
    this.farmaciaService.getFarmacia(this.id).subscribe(
      (data: Farmacia) => {
        this.farmacia = data;
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
      correo: ['']
    })
  }
  updateFarmacia() {
    let farmacia: Farmacia = {
      id: this.id,
      nombreFarmacia: this.myForm.get('nombreFarmacia')?.value,
      ruc: this.myForm.get('ruc')?.value,
      distrito: this.myForm.get('distrito')?.value,
      provincia: this.myForm.get('provincia')?.value,
      departamento: this.myForm.get('departamento')?.value,
      apellido: this.myForm.get('apellido')?.value,
      dni: this.myForm.get('dni')?.value,
      nombre: this.myForm.get('nombre')?.value,
      telefono: this.myForm.get('telefono')?.value,
      correo: this.farmacia.correo,
      password: this.farmacia.password,
      activo: true
    }
    this.farmaciaService.updateFarmacia(farmacia).subscribe({
      next: (data: Farmacia) => {
        this.router.navigate(['/inventario/' + this.id]);
      }
    })
  }
}
