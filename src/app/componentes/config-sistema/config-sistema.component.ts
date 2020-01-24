import { Component, OnInit } from '@angular/core';
import { Impuesto } from '../../modelos/impuesto';
import { ImpuestoService } from '../../servicios/impuesto.service';
import { Configuracion_sist } from '../../modelos/configuracion_sist';
import { ConfiguracionSisService } from '../../servicios/configuracion-sis.service';

@Component({
  selector: 'app-config-sistema',
  templateUrl: './config-sistema.component.html',
  styleUrls: ['./config-sistema.component.scss']
})
export class ConfigSistemaComponent implements OnInit {

	impuestos: Impuesto[];
	configuracion: Configuracion_sist;

  constructor(private impuestoService: ImpuestoService,
  	private ConfiguracionService: ConfiguracionSisService) {}

  ngOnInit() {

  	this.impuestoService.getImpuestos().subscribe(
  		impuestos => this.impuestos = impuestos)

  	this.ConfiguracionService.getConfiguracion(1).subscribe(
  		configuracion => this.configuracion = configuracion)

  }

}
