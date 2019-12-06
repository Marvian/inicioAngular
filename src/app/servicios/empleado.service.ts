import { Injectable } from '@angular/core';
import { Empleado } from '../modelos/empleado';
import { Observable, of  } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class EmpleadoService {

  	private urlEndPoint: string = 'http://localhost:8080/employee/readEmployee';

  	constructor(private http: HttpClient) { }

  	getEmpleado(): Observable<Empleado[]> {
  	
  	return this.http.get(this.urlEndPoint).pipe(
  		map(response => response as Empleado[])
  	);
  }
}
