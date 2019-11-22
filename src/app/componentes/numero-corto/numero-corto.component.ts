import { Component, OnInit } from '@angular/core';
import { Numero } from '../../modelos/numero';
import { NumeroCortoService } from '../../servicios/numero-corto.service';


@Component({
  selector: 'app-numero-corto',
  templateUrl: './numero-corto.component.html',
  styleUrls: ['./numero-corto.component.scss']
})
export class NumeroCortoComponent implements OnInit {

 numeros: Numero[];

  constructor( private numeroCortoService: NumeroCortoService) { }

  ngOnInit() {

  	this.numeroCortoService.getNumeroCorto().subscribe(
  		numeros => this.numeros = numeros
  		
  	);
  }


}
