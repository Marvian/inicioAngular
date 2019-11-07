import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datos-proveedor',
  templateUrl: './datos-proveedor.component.html',
  styleUrls: ['./datos-proveedor.component.scss']
})
export class DatosProveedorComponent  {
	
segundo = false;
contactoDos = false;
contactoTres = false;

  constructor() { }

  agregarContactoDos(){
  this.contactoDos = (this.contactoDos == true)? false: true;
  }

  agregarContactoTres(){
  this.contactoTres = (this.contactoTres == true)? false: true;
  }
 
}
