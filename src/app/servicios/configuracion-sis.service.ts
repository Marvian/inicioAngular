import { Injectable } from '@angular/core';
import { Configuracion_sist } from '../modelos/configuracion_sist';
import { Observable, of, throwError  } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ConfiguracionSisService {

  private urlEndPoint: string = 'http://localhost:8080/configSistem/readAll';
  private urlEndPointRead: string = 'http://localhost:8080/configSistem/read/';
  private urlEndPointUpdate: string = 'http://localhost:8080/configSistem/update/';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient, 
              private router: Router) {}

  getConfiguraciones(): Observable<Configuracion_sist[]> {  	 
  		return this.http.get(this.urlEndPoint).pipe(map(
        response => response as Configuracion_sist[]));
  }

  getConfiguracion(id): Observable<Configuracion_sist>{
     return this.http.get<Configuracion_sist>(this.urlEndPointRead + id).pipe (
        catchError(e => {
          this.router.navigate(['/solicitudes']);
          console.log("error");
          console.log(e.error.mensaje);
          return throwError(e);
        })
      )
  }

 update(configuracion_sist: Configuracion_sist): Observable<Configuracion_sist>{
    return this.http.put<Configuracion_sist>(this.urlEndPointUpdate + configuracion_sist.id, configuracion_sist, {headers: this.httpHeaders}).pipe (
        catchError(e => {
          console.log("error");
          console.log(e.error.mensaje);
          return throwError(e);
        })
        )
  }

}