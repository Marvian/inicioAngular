import { Component, OnInit } from '@angular/core';
import { Proveedor } from '../../../modelos/proveedor';
import { ProveedorService } from '../../../servicios/proveedor.service';

@Component({
  selector: 'app-reporte4',
  templateUrl: './reporte4.component.html',
  styleUrls: ['./reporte4.component.scss']
})
export class Reporte4Component implements OnInit {

  proveedores : Proveedor[];

  constructor( private proveedorService: ProveedorService ) { }

  ngOnInit() {

  	this.proveedorService.getProveedores().subscribe(
  		proveedores => this.proveedores = proveedores
  		);
  }

}