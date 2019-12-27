import { Component, OnInit } from '@angular/core';
import { ListaNegra } from '../../../modelos/listaNegra';
import { ListaNegraService } from '../../../servicios/lista-negra.service';

@Component({
  selector: 'app-reporte3',
  templateUrl: './reporte3.component.html',
  styleUrls: ['./reporte3.component.scss']
})
export class Reporte3Component implements OnInit {

 listasNegra : ListaNegra[];

  constructor( private listaNegraService: ListaNegraService ) { }

  ngOnInit() {

  	this.listaNegraService.getListaNegra().subscribe(
  		listasNegra => this.listasNegra = listasNegra
  		);
  }

}
