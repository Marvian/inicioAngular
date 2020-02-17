import { Injectable } from '@angular/core';
import { Numero } from '../modelos/numero';
import { Observable, of, throwError  } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class NumeroCortoService {

	private urlEndPoint: string = 'http://localhost:8080/shortCode/readAll';
	private urlEndPointRead: string = 'http://localhost:8080/shortCode/read/';
  	private urlEndPointUpdate: string = 'http://localhost:8080/shortCode/update/';

   private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient,
  			  private router: Router) { }

  getNumeroCorto(): Observable<Numero[]> {
  	
  	return this.http.get(this.urlEndPoint).pipe(
  		map(response => response as Numero[])
  	);
  }

  getNumero(id): Observable<Numero>{
     console.log(id)
    return this.http.get<Numero>(this.urlEndPointRead + id).pipe (
        catchError(e => {
          this.router.navigate(['/numerocorto']);
          console.log("error");
          console.log(e.error.mensaje);
          return throwError(e);
        })
        )
  }

  update(numero: Numero): Observable<Numero>{
    return this.http.put<Numero>(this.urlEndPointUpdate + numero.id, numero, {headers: this.httpHeaders}).pipe (
        catchError(e => {
          console.log("error");
          console.log(e.error.mensaje);
          return throwError(e);
        })
        )
  }
}
