import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {
  
  myform!:FormGroup;
  constructor(private formBuilder:FormBuilder){
  
  }
  ngOnInit() { 
    this.loadMyForm();
  }

  loadMyForm(){
    this.myform=this.formBuilder.group({
      nombre:['']
    })
  }
}
