import { Injectable } from '@angular/core';
import { UnidadMonetaria } from '../modelos/unidadMonetaria';
import { Observable, of, throwError  } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class UnidadMonetariaService {

  private urlEndPoint: string = 'http://localhost:8080/unidadMonetaria/readAll';
  private urlEndPointRead: string = 'http://localhost:8080/unidadMonetaria/read/';
  private urlEndPointUpdate: string = 'http://localhost:8080/unidadMonetaria/update/';
	
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient, 
              private router: Router) {}

  getUnidadMonetarias(): Observable<UnidadMonetaria[]> {  	 
  		return this.http.get(this.urlEndPoint).pipe(map(
        response => response as UnidadMonetaria[]));
  }

  getUnidadMonetaria(id): Observable<UnidadMonetaria>{
     console.log(id)
    return this.http.get<UnidadMonetaria>(this.urlEndPointRead + id).pipe (
        catchError(e => {
          this.router.navigate(['/numerocorto']);
          console.log("error");
          console.log(e.error.mensaje);
          return throwError(e);
        })
        )
  }

  update(unidadMonetaria: UnidadMonetaria): Observable<UnidadMonetaria>{
    return this.http.put<UnidadMonetaria>(this.urlEndPointUpdate + unidadMonetaria.id, unidadMonetaria, {headers: this.httpHeaders}).pipe (
        catchError(e => {
          console.log("error");
          console.log(e.error.mensaje);
          return throwError(e);
        })
        )
  }
}
