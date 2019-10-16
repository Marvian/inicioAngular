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

new Numero (1, 5541, 16, 1724, 'MO', 'Si'),
new Numero (2, 4254, 140, 1724, 'MT', 'Si'),
new Numero (3, 3859, 140, 1724, 'MT', 'Si'),
new Numero (4, 1520, 140, 1724, 'MO', 'Si')

];

}
