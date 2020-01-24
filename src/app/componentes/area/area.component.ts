import { Component, OnInit } from '@angular/core';
import { Area } from '../../modelos/area';
import { AreaService } from '../../servicios/area.service';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

	areas : Area[];

  constructor( private areaService: AreaService ) { }

  ngOnInit() {

  	this.areaService.getAreas().subscribe(
  		areas => this.areas = areas)
  }

}
