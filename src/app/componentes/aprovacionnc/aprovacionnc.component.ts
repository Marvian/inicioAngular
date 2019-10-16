import { Component, OnInit } from '@angular/core';
import { Solicitud } from '../../modelos/solicitud';

@Component({
  selector: 'app-aprovacionnc',
  templateUrl: './aprovacionnc.component.html',
  styleUrls: ['./aprovacionnc.component.scss']
})
export class AprovacionncComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

    solicitudes = [

new Solicitud (1, 4589, 'Apertura', 'DIRECTV', 'PostPago', '2019-08-14'),
new  Solicitud (2, 48621, 'Apertura', 'INTERCABLE', 'PostPago', '2019-08-13')
 ];

}
 