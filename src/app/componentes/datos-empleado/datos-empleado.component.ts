import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../modelos/empleado';
import { EmpleadoService } from '../../servicios/empleado.service';
import { Area } from '../../modelos/area';
import { AreaService } from '../../servicios/area.service';
import { Router, ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-datos-empleado',
  templateUrl: './datos-empleado.component.html',
  styleUrls: ['./datos-empleado.component.scss']
})
export class DatosEmpleadoComponent implements OnInit {

  private empleado: Empleado = new Empleado() 
  areas : Area[];

  constructor(private empleadoService: EmpleadoService,
    private areaService: AreaService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  	console.log("trae el empleado")
    this.traerEmpleado()
    this.areaService.getAreas().subscribe(
      areas => this.areas = areas);
  }

  traerEmpleado(): void{
    console.log("en el metodo")
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.empleadoService.getEmpleado(id).subscribe( (empleado) => this.empleado = empleado)
      }
    })
  }

  modificarEmpleado(): void{
    this.empleadoService.update(this.empleado).subscribe(
      response => {this.router.navigate(['/empleado'])}
    );
  }

}
