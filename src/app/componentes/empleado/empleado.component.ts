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
 ];

}
