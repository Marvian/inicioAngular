import { Component, OnInit } from '@angular/core';
import { Proveedor } from '../../modelos/proveedor';
import { ProveedorService } from '../../servicios/proveedor.service';
import { Router} from '@angular/router'



@Component({
  selector: 'app-datos-proveedor',
  templateUrl: './datos-proveedor.component.html',
  styleUrls: ['./datos-proveedor.component.scss']
})
export class DatosProveedorComponent implements OnInit  {

 private proveedor: Proveedor = new Proveedor() 
 private titulo:string = "Crear proveedor"
	
segundo = false;
contactoDos = false;
contactoTres = false;


  constructor(private proveedorService: ProveedorService,
    private router: Router) { }

  agregarContactoDos(){
  this.contactoDos = (this.contactoDos == true)? false: true;
  }

  agregarContactoTres(){
  this.contactoTres = (this.contactoTres == true)? false: true;
  }

  ngOnInit(){

  }

  public crearproveedor(): void{
    console.log("creando")
    console.log(this.proveedor)

    this.proveedorService.create(this.proveedor).subscribe(
      response => {this.router.navigate(['/proveedor'])
    }
    );   
  }
 
}
