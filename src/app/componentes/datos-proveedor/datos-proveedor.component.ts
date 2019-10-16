import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datos-proveedor',
  templateUrl: './datos-proveedor.component.html',
  styleUrls: ['./datos-proveedor.component.scss']
})
export class DatosProveedorComponent implements OnInit {
	
segundo = false;
contactoDos = false;
contactoTres = false;

  constructor() { }

  ngOnInit() {

  }

  agregarContactoDos(){
  this.contactoDos = true;
  }

   agregarContactoTres(){
  this.contactoTres = true;
  }
 
}
