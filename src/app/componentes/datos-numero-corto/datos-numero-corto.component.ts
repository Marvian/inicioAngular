import { Component, OnInit } from '@angular/core';
import { Numero } from '../../modelos/numero';
import { NumeroCortoService } from '../../servicios/numero-corto.service';
import { Router, ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-datos-numero-corto',
  templateUrl: './datos-numero-corto.component.html',
  styleUrls: ['./datos-numero-corto.component.scss']
})
export class DatosNumeroCortoComponent implements OnInit {

	private numero: Numero = new Numero()

  constructor(private numeroService: NumeroCortoService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  	this.traerNumero()
  }

  traerNumero(): void{
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.numeroService.getNumero(id).subscribe( (numero) => this.numero = numero)
        
      }
    })
  }

  modificarNumero(): void{
    this.numeroService.update(this.numero).subscribe(
      response => {this.router.navigate(['/numero'])}
    );
  }

}
