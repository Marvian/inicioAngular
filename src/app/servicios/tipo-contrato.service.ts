import { Injectable } from '@angular/core';
import { TipoContrato } from '../modelos/tipoContrato';
import { Observable, of, throwError  } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class TipoContratoService {

  private urlEndPoint: string = 'http://localhost:8080/tipoContrato/readAll';
  private urlEndPointRead: string = 'http://localhost:8080/tipoContrato/read/';
  private urlEndPointUpdate: string = 'http://localhost:8080/tipoContrato/update/';
	
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient, 
              private router: Router) {}

  getTipoContratos(): Observable<TipoContrato[]> {  	 
  		return this.http.get(this.urlEndPoint).pipe(map(
        response => response as TipoContrato[]));
  }

  getTipoContrato(id): Observable<TipoContrato>{
     console.log(id)
    return this.http.get<TipoContrato>(this.urlEndPointRead + id).pipe (
        catchError(e => {
          this.router.navigate(['/numerocorto']);
          console.log("error");
          console.log(e.error.mensaje);
          return throwError(e);
        })
        )
  }
}
