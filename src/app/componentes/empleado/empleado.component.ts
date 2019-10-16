import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../modelos/empleado';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.scss']
})
export class EmpleadoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 empleados = [

new Empleado (1, "mmontoya", 'Marvian', 'Montoya', 'ing', 'prepago', 'si'),
new  Empleado (2, 'mmontoya', 'Marvian', 'Montoya', 'ing', 'prepago', 'si'),
new Empleado (3, "mmontoya", 'Marvian', 'Montoya', 'ing', 'prepago', 'si'),
new  Empleado (4, 'mmontoya', 'Marvian', 'Montoya', 'ing', 'prepago', 'si'),
new Empleado (5, "mmontoya", 'Marvian', 'Montoya', 'ing', 'prepago', 'si'),
new  Empleado (6, 'mmontoya', 'Marvian', 'Montoya', 'ing', 'prepago', 'si'),

 ];

}
