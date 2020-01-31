import { Injectable } from '@angular/core';
import { Solicitud } from '../modelos/solicitud';
import { Observable, of, throwError  } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

import { Router } from '@angular/router';

@Injectable()
export class SolicitudService {

  private urlEndPoint: string = 'http://localhost:8080/solicitud/readAll';
  private urlEndPointRead: string = 'http://localhost:8080/solicitud/read/';
  private urlEndPointCreate: string = 'http://localhost:8080/solicitud/create';
  private urlEndPointUpdate: string = 'http://localhost:8080/solicitud/update/';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient, 
              private router: Router) {}

  getSolicitudes(): Observable<Solicitud[]> {  	 
  		return this.http.get(this.urlEndPoint).pipe(map(
        response => response as Solicitud[]));
  }

  getSolicitud(id): Observable<Solicitud>{
     console.log(id)
    return this.http.get<Solicitud>(this.urlEndPointRead + id).pipe (
        catchError(e => {
          this.router.navigate(['/solicitudes']);
          console.log("error");
          console.log(e.error.mensaje);
          return throwError(e);
        })
        )
  }

  create(solicitud: Solicitud) : Observable<Solicitud> {
    console.log(solicitud);
  	return this.http.post<Solicitud>(this.urlEndPointCreate, solicitud, {headers: this.httpHeaders} ).pipe (
        catchError(e => {
          console.log("error");
          console.log(e.error.mensaje);
          return throwError(e);
        })
        ) 
  }

  update(solicitud: Solicitud): Observable<Solicitud>{
    return this.http.put<Solicitud>(this.urlEndPointUpdate + solicitud.id, solicitud, {headers: this.httpHeaders}).pipe (
        catchError(e => {
          console.log("error");
          console.log(e.error.mensaje);
          return throwError(e);
        })
        )
  }

}