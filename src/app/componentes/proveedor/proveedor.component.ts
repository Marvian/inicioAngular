import { Component, OnInit } from '@angular/core';
import { Proveedor } from '../../modelos/proveedor';
import { ProveedorService } from '../../servicios/proveedor.service';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.scss']
})
export class ProveedorComponent implements OnInit {

proveedores : Proveedor[];

  constructor( private proveedorService: ProveedorService ) { }

  ngOnInit() {

  	this.proveedorService.getProveedor().subscribe(
  		proveedores => this.proveedores = proveedores
  		);
  }
}
  



