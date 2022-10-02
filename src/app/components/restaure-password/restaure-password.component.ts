import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-restaure-password',
  templateUrl: './restaure-password.component.html',
  styleUrls: ['./restaure-password.component.css']
})
export class RestaurePasswordComponent implements OnInit {
  hide = true;
  myform!:FormGroup;


  constructor(private formBiulder: FormBuilder) { }

  ngOnInit(): void {
    this.loadMyForm();
  }

  loadMyForm(){
   this.myform=this.formBiulder.group({
    password1:[""]
   })
  }

}

