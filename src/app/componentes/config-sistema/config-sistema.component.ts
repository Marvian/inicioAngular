import { Component, OnInit } from '@angular/core';
import { Impuesto } from '../../modelos/impuesto';
import { ImpuestoService } from '../../servicios/impuesto.service';
import { ConfiguracionSist } from '../../modelos/configuracionSist';
import { ConfiguracionSisService } from '../../servicios/configuracion-sis.service';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-config-sistema',
  templateUrl: './config-sistema.component.html',
  styleUrls: ['./config-sistema.component.scss']
})
export class ConfigSistemaComponent implements OnInit {

	impuestos: Impuesto[];
	configuracion: ConfiguracionSist;

  constructor(private impuestoService: ImpuestoService,
  	private ConfiguracionService: ConfiguracionSisService) {}

  ngOnInit() {

  	this.impuestoService.getImpuestos().subscribe(
  		impuestos => this.impuestos = impuestos)

  	this.ConfiguracionService.getConfiguracion(1).subscribe(
  		configuracion => this.configuracion = configuracion)

  }

}
