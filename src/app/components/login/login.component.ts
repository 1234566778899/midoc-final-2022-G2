import { Farmacia } from './../../moduls/farmacias';
import { FarmaciasService } from './../../services/farmacias/farmacias.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  myform!: FormGroup;
  farmacias!: Farmacia[];
  correo!: string;
  password!: string;
  esValido!: boolean;

  constructor(private formBuilder: FormBuilder,
    private farmaciaService: FarmaciasService,
    private router: Router) { }

  ngOnInit(): void {
    this.loadMyForm();
    this.getFarmacias();
    this.esValido = true;
  }

  loadMyForm() {
    this.myform = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email, Validators.max(50)]],
      password: ['', [Validators.required, Validators.maxLength(50)]]
    })
  }
  getFarmacias() {
    this.farmaciaService.getFarmacias().subscribe(
      (data: Farmacia[]) => {
        this.farmacias = data;
      }
    )
  }

  verificarUsuario(): void {
    console.log(this.farmacias);
    this.correo = this.myform.get('email')?.value;
    this.password = this.myform.get('password')?.value;

    for (let i = 0; i < this.farmacias.length; i++) {
      if (this.farmacias[i].correo == this.correo && this.farmacias[i].password == this.password) {
        this.router.navigate([`user/${this.farmacias[i].id}`]);
      }
    }
    this.esValido = false;
  }
}
