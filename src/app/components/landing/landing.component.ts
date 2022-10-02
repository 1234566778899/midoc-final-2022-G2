import { Router } from '@angular/router';
import { Consulta } from './../../moduls/consulta';
import { ConsultasService } from './../../services/consulta/consultas.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  myForm!: FormGroup;
  constructor(private http: HttpClient, private formBuilder: FormBuilder,
    private consultaService: ConsultasService, private router: Router) { }

  ngOnInit(): void {
    this.reactiveForm();
  }

  reactiveForm() {
    this.myForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.maxLength(15)]],
      correo: ['', [Validators.required, Validators.email, Validators.maxLength(30)]],
      descripcion: ['', [Validators.required]]
    })
  }

  addConsulta() {
    let consulta: Consulta = {
      id: 0,
      nombre: this.myForm.get('nombre')?.value,
      correo: this.myForm.get('correo')?.value,
      descripcion: this.myForm.get('descripcion')?.value
    }

    this.consultaService.addConsulta(consulta).subscribe({
      next: (data: Consulta) => {
        alert('Su consulta se ha realizado con exito');
        this.router.navigate(['/inicio']);
      },
      error: (e) => {
        console.log(e);
      }
    })


  }



}
