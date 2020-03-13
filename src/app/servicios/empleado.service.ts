import { Injectable } from '@angular/core';
import { Empleado } from '../modelos/empleado';
import { Observable, of, throwError  } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class EmpleadoService {

  	private urlEndPoint: string = 'http://localhost:8080/employee/readAll';
  	private urlEndPointRead: string = 'http://localhost:8080/employee/read/';
  	private urlEndPointCreate: string = 'http://localhost:8080/employee/create';
  	private urlEndPointUpdate: string = 'http://localhost:8080/employee/update/';

  	private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  	constructor(private http: HttpClient, 
              private router: Router) { }

  	getEmpleados(): Observable<Empleado[]> {
  	 	return this.http.get(this.urlEndPoint).pipe(
  		map(response => response as Empleado[]));
 	}

  	getEmpleado(id): Observable<Empleado>{
        return this.http.get<Empleado>(this.urlEndPointRead + id).pipe (
        catchError(e => {
          this.router.navigate(['/empleado']);
          console.log("error");
          console.log(e.error.mensaje);
          return throwError(e);
        })
        )
  	}

  	create(empleado: Empleado) : Observable<Empleado> {
	    console.log(empleado);
	  	return this.http.post<Empleado>(this.urlEndPointCreate, empleado, {headers: this.httpHeaders} ).pipe (
        catchError(e => {
          console.log("error");
          console.log(e.error.mensaje);
          return throwError(e);
        })
        ) 
  	}

  	update(empleado: Empleado): Observable<Empleado>{
    	return this.http.put<Empleado>(this.urlEndPointUpdate + empleado.id, empleado, {headers: this.httpHeaders}).pipe (
        catchError(e => {
          console.log("error");
          console.log(e.error.mensaje);
          return throwError(e);
        })
        )
  	}
}
