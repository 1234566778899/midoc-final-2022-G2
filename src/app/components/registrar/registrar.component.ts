import { Router, ActivatedRoute } from '@angular/router';
import { Farmacia } from './../../moduls/farmacias';
import { FarmaciasService } from './../../services/farmacias/farmacias.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
  myForm!: FormGroup;
  hide = true;

  constructor(private formBuilder: FormBuilder,
    private farmaciaService: FarmaciasService,
    private router: Router,
    private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.reactiveForm();
  }
  reactiveForm(): void {
    this.myForm = this.formBuilder.group({
      name_Farmacia: ["", [Validators.required]],
      RUC: ["", [Validators.required, Validators.maxLength(11), Validators.minLength(11)]],
      Departamento: ["", [Validators.required]],
      Provincia: ["", [Validators.required]],
      Distrito: ["", [Validators.required]],
      Apellidos: ["", [Validators.required]],
      Nombres: ["", [Validators.required]],
      Telefono: ["", [Validators.required, Validators.maxLength(9)]],
      email: ["", [Validators.required, Validators.email]],
      Password: ["", [Validators.required, Validators.minLength(8)]],
      ConfirmPassword: ["", [Validators.required, Validators.minLength(8)]],
    }
    )
  }

  AddFarmacia(): void {
    const farmacia: Farmacia = {
      id: 0,
      nombreFarmacia: this.myForm.get("name_Farmacia")!.value,
      ruc: this.myForm.get("RUC")!.value,
      departamento: this.myForm.get("Departamento")!.value,
      provincia: this.myForm.get("Provincia")!.value,
      distrito: this.myForm.get("Distrito")!.value,
      apellido: this.myForm.get("Apellidos")!.value,
      nombre: this.myForm.get("Nombres")!.value,
      telefono: this.myForm.get("Telefono")!.value,
      correo: this.myForm.get("email")!.value,
      dni:this.myForm.get('dni')?.value,
      password: this.myForm.get("Password")!.value,
    }
    this.farmaciaService.addFarmacia(farmacia).subscribe({
      next: (data) => {
        this.router.navigate(["/login"]);
      },
      error: (e) => {
        console.log(e);
      }
    }
    )
  }
}
