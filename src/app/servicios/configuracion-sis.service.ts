import { Injectable } from '@angular/core';
import { ConfiguracionSist } from '../modelos/configuracionSist';
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

  getConfiguraciones(): Observable<ConfiguracionSist[]> {  	 
  		return this.http.get(this.urlEndPoint).pipe(map(
        response => response as ConfiguracionSist[]));
  }

  getConfiguracion(id): Observable<ConfiguracionSist>{
     return this.http.get<ConfiguracionSist>(this.urlEndPointRead + id).pipe (
        catchError(e => {
          this.router.navigate(['/solicitudes']);
          console.log("error");
          console.log(e.error.mensaje);
          return throwError(e);
        })
      )
  }

 update(configuracion_sist: ConfiguracionSist): Observable<ConfiguracionSist>{
    return this.http.put<ConfiguracionSist>(this.urlEndPointUpdate + configuracion_sist.id, configuracion_sist, {headers: this.httpHeaders}).pipe (
        catchError(e => {
          console.log("error");
          console.log(e.error.mensaje);
          return throwError(e);
        })
        )
  }

}