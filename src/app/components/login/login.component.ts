import { Farmacia } from './../../moduls/farmacias';
import { FarmaciasService } from './../../services/farmacias/farmacias.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  myform!: FormGroup;
  correo!: string;
  password!: string;
  esValido!: boolean;
  id!: number;
  constructor(private formBuilder: FormBuilder,
    private farmaciaService: FarmaciasService,
    private router: Router, private activatedRoute: ActivatedRoute) { }
    
  ngOnInit(): void {
    this.loadMyForm();
    this.esValido = true;
    this.id=this.activatedRoute.snapshot.params["id"];

  }

  loadMyForm() {
    this.myform = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email, Validators.max(50)]],
      password: ['', [Validators.required, Validators.maxLength(50)]]
    })
  }
 

  verificarUsuario(): void {
    this.correo = this.myform.get('email')?.value;
    this.password = this.myform.get('password')?.value;
    this.farmaciaService.getFarmacias().Subscribe(
       (data: Farmacia[])=>{
           let auxfarmacia=data.find(x=>x.correo==this.correo && x.password==this.password); 

           if(auxfarmacia){
            this.router.navigate(["user/"+ this.id ]);
           }
       }

    );
    
  }
}
