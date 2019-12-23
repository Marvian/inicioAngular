import { Component, OnInit } from '@angular/core';
import { Proveedor } from '../../../modelos/proveedor';
import { ProveedorService } from '../../../servicios/proveedor.service';

@Component({
  selector: 'app-reporte1',
  templateUrl: './reporte1.component.html',
  styleUrls: ['./reporte1.component.scss']
})
export class Reporte1Component implements OnInit {

proveedores : Proveedor[];

  constructor( private proveedorService: ProveedorService ) { }

  ngOnInit() {

  	this.proveedorService.getProveedor().subscribe(
  		proveedores => this.proveedores = proveedores
  		);
  }

}
