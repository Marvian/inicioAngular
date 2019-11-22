import { Component, OnInit } from '@angular/core';
import { Numero } from '../../modelos/numero';

@Component({
  selector: 'app-form-nuevo-numero',
  templateUrl: './form-nuevo-numero.component.html',
  styleUrls: ['./form-nuevo-numero.component.scss']
})
export class FormNuevoNumeroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

 numeros = [

];

}
