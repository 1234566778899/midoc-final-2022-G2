import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {

  myform!: FormGroup;
  idFarmacia!: number;
  constructor(private formBuilder: FormBuilder, private activated: ActivatedRoute) {

  }
  ngOnInit() {
    this.loadMyForm();
    this.idFarmacia = this.activated.snapshot.params['id'];
  }

  loadMyForm() {
    this.myform = this.formBuilder.group({
      nombre: ['']
    })
  }
}
