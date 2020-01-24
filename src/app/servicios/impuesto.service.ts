import { Injectable } from '@angular/core';
import { Impuesto } from '../modelos/impuesto';
import { Observable, of, throwError  } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class ImpuestoService {

  private urlEndPoint: string = 'http://localhost:8080/impost/readAll';
  private urlEndPointRead: string = 'http://localhost:8080/impost/read/';
  private urlEndPointUpdate: string = 'http://localhost:8080/impost/update/';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient, 
              private router: Router) {}

  getImpuestos(): Observable<Impuesto[]> {  	 
  		return this.http.get(this.urlEndPoint).pipe(map(
        response => response as Impuesto[]));
  }

  getImpuesto(id): Observable<Impuesto>{
     console.log(id)
    return this.http.get<Impuesto>(this.urlEndPointRead + id).pipe (
        catchError(e => {
          this.router.navigate(['/solicitudes']);
          console.log("error");
          console.log(e.error.mensaje);
          return throwError(e);
        })
        )
  }

  update(impuesto: Impuesto): Observable<Impuesto>{
    return this.http.put<Impuesto>(this.urlEndPointUpdate + impuesto.id, impuesto, {headers: this.httpHeaders}).pipe (
        catchError(e => {
          console.log("error");
          console.log(e.error.mensaje);
          return throwError(e);
        })
        )
  }

}
