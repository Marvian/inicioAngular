import { Injectable } from '@angular/core';
import { EjemploContenido } from '../modelos/ejemploContenido';
import { Observable, of, throwError  } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class EjemploContenidoService {

  private urlEndPoint: string = 'http://localhost:8080/ejemploContenido/readAll';
  private urlEndPointRead: string = 'http://localhost:8080/ejemploContenido/read/';
  private urlEndPointUpdate: string = 'http://localhost:8080/ejemploContenido/update/';
	
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient, 
              private router: Router) {}

  getEjemploContenidos(): Observable<EjemploContenido[]> {  	 
  		return this.http.get(this.urlEndPoint).pipe(map(
        response => response as EjemploContenido[]));
  }

  getEjemploContenido(id): Observable<EjemploContenido>{
     console.log(id)
    return this.http.get<EjemploContenido>(this.urlEndPointRead + id).pipe (
        catchError(e => {
          this.router.navigate(['/numerocorto']);
          console.log("error");
          console.log(e.error.mensaje);
          return throwError(e);
        })
        )
  }

  update(ejemploContenido: EjemploContenido): Observable<EjemploContenido>{
    return this.http.put<EjemploContenido>(this.urlEndPointUpdate + ejemploContenido.id, ejemploContenido, {headers: this.httpHeaders}).pipe (
        catchError(e => {
          console.log("error");
          console.log(e.error.mensaje);
          return throwError(e);
        })
        )
  }
}
