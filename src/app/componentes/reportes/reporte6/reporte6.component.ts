import { Component, OnInit } from '@angular/core';
import { Log } from '../../../modelos/log';
import { LogService } from '../../../servicios/log.service';

@Component({
  selector: 'app-reporte6',
  templateUrl: './reporte6.component.html',
  styleUrls: ['./reporte6.component.scss']
})
export class Reporte6Component implements OnInit {

  logs : Log[];

  constructor(private logService: LogService ) { }

  ngOnInit() {

  	this.logService.getLog().subscribe(
  		logs => this.logs = logs
  		);
  }

}
