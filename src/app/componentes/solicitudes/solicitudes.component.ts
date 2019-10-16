import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.scss']
})
export class SolicitudesComponent implements OnInit {

	public total = 21;
	public apertura = 10;
	public tarifa = 5;
	public cancelacion = 2;
	public traspaso = 3;
	public bloqueo = 1;
  constructor() { }

  ngOnInit() {
  }

}
