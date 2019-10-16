import { Component, OnInit } from '@angular/core';
import { Proveedor } from '../../modelos/proveedor';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.scss']
})
export class ProveedorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  proveedores = [

new Proveedor (1, 'proveedor1', 'DIRECTV', 551654651, 'Venezuela-Caracas', '2019-08-14', 'Activo', 'Proveedor'),
new  Proveedor (2, 'proveedor2', 'INTERCABLE', 215487, 'Venezuela-Miranda', '2019-08-13', 'Activo', 'Proveedor')
 ];

}
