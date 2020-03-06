import { Injectable } from '@angular/core';
import { UltimaContraseña } from '../modelos/ultimaContraseña';
import { Observable, of, throwError  } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class UltimaContraseñaService {

  private urlEndPoint: string = 'http://localhost:8080/ultimaContraseña/readAll';
  private urlEndPointRead: string = 'http://localhost:8080/ultimaContraseña/read/';
  private urlEndPointUpdate: string = 'http://localhost:8080/ultimaContraseña/update/';
	
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient, 
              private router: Router) {}

  getUltimaContraseñas(): Observable<UltimaContraseña[]> {  	 
  		return this.http.get(this.urlEndPoint).pipe(map(
        response => response as UltimaContraseña[]));
  }

  getUltimaContraseña(id): Observable<UltimaContraseña>{
     console.log(id)
    return this.http.get<UltimaContraseña>(this.urlEndPointRead + id).pipe (
        catchError(e => {
          this.router.navigate(['/numerocorto']);
          console.log("error");
          console.log(e.error.mensaje);
          return throwError(e);
        })
        )
  }

  update(ultimaContraseña: UltimaContraseña): Observable<UltimaContraseña>{
    return this.http.put<UltimaContraseña>(this.urlEndPointUpdate + ultimaContraseña.id, ultimaContraseña, {headers: this.httpHeaders}).pipe (
        catchError(e => {
          console.log("error");
          console.log(e.error.mensaje);
          return throwError(e);
        })
        )
  }

  
}
