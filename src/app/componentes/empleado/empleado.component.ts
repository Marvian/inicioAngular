import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../modelos/empleado';
import { EmpleadoService } from '../../servicios/empleado.service';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.scss']
})
export class EmpleadoComponent implements OnInit {

	empleados : Empleado[];

  constructor(private empleadoService: EmpleadoService) { }

  ngOnInit() {

  	this.empleadoService.getEmpleado().subscribe(
  		empleados => this.empleados = empleados
  	);
  }
  

}
