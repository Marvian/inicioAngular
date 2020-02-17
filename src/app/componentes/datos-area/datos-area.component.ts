import { Component, OnInit } from '@angular/core';
import { Area } from '../../modelos/area';
import { AreaService } from '../../servicios/area.service';
import { Router, ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-datos-area',
  templateUrl: './datos-area.component.html',
  styleUrls: ['./datos-area.component.scss']
})
export class DatosAreaComponent implements OnInit {

	 private area: Area = new Area() 

  constructor(private areaService: AreaService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  	console.log("trae el area")
    this.traerArea()
  }

  traerArea(): void{
    console.log("en el metodo")
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.areaService.getArea(id).subscribe( (area) => this.area = area)
      }
    })
  }

  modificarArea(): void{
    this.areaService.update(this.area).subscribe(
      response => {this.router.navigate(['/area'])}
    );
  }

}
