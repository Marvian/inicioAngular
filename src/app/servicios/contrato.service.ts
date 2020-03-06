import { Injectable } from '@angular/core';
import { Contrato } from '../modelos/contrato';
import { Observable, of, throwError  } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class ContratoService {

  private urlEndPoint: string = 'http://localhost:8080/contrato/readAll';
  private urlEndPointRead: string = 'http://localhost:8080/contrato/read/';
  private urlEndPointUpdate: string = 'http://localhost:8080/contrato/update/';
	
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient, 
              private router: Router) {}

  getContratos(): Observable<Contrato[]> {  	 
  		return this.http.get(this.urlEndPoint).pipe(map(
        response => response as Contrato[]));
  }

  getContrato(id): Observable<Contrato>{
     console.log(id)
    return this.http.get<Contrato>(this.urlEndPointRead + id).pipe (
        catchError(e => {
          this.router.navigate(['/numerocorto']);
          console.log("error");
          console.log(e.error.mensaje);
          return throwError(e);
        })
        )
  }

  update(contrato: Contrato): Observable<Contrato>{
    return this.http.put<Contrato>(this.urlEndPointUpdate + contrato.id, contrato, {headers: this.httpHeaders}).pipe (
        catchError(e => {
          console.log("error");
          console.log(e.error.mensaje);
          return throwError(e);
        })
        )
  }
}
