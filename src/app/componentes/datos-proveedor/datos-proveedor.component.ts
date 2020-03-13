
import { Component, OnInit } from '@angular/core';
import { Proveedor } from '../../modelos/proveedor';
import { ProveedorService } from '../../servicios/proveedor.service';
import { Router, ActivatedRoute} from '@angular/router'
import swal  from 'sweetalert2';


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
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  agregarContactoDos(){
  this.contactoDos = (this.contactoDos == true)? false: true;
  }

  agregarContactoTres(){
  this.contactoTres = (this.contactoTres == true)? false: true;
  }

  ngOnInit(){
    console.log("trae el provedor")
    this.traerProveedor()
  }

  traerProveedor(): void{
    console.log("en el metodo")
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.proveedorService.getProveedor(id).subscribe( (proveedor) => this.proveedor = proveedor)
      }
    })
  }

  crearProveedor(): void{
    console.log("creando")
    console.log(this.proveedor)

    this.proveedorService.create(this.proveedor).
    subscribe(response => {
      {this.router.navigate(['/proveedor'])}
      swal('Nuevo proveedor', `Proveedor ${this.proveedor.name} creado con exito`, 'success')
    });   
  }
  
  modificarProveedor(): void{
    this.proveedorService.update(this.proveedor).subscribe(
      response => {{this.router.navigate(['/proveedor'])}
     swal('Proveedor modificado', `Proveedor ${this.proveedor.name} modificado con exito`, 'success')
     });
  }

}
