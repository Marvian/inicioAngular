import { Injectable } from '@angular/core';
import { Proveedor } from '../modelos/proveedor';
import { Observable, of, throwError  } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

import { Router } from '@angular/router';


@Injectable()
export class ProveedorService {

  private urlEndPoint: string = 'http://localhost:8080/provider/readAll';
  private urlEndPointRead: string = 'http://localhost:8080/provider/read/';
  private urlEndPointCreate: string = 'http://localhost:8080/provider/create';
  private urlEndPointUpdate: string = 'http://localhost:8080/provider/update/';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient, 
              private router: Router) {}

  getProveedores(): Observable<Proveedor[]> {  	 
  		return this.http.get(this.urlEndPoint).pipe(map(
        response => response as Proveedor[]));
  }

  getProveedor(id): Observable<Proveedor>{
     console.log(id)
    return this.http.get<Proveedor>(this.urlEndPointRead + id).pipe (
        catchError(e => {
          this.router.navigate(['/proveedor']);
          console.log("error");
          console.log(e.error.mensaje);
          return throwError(e);
        })
        )
  }

  create(proveedor: Proveedor) : Observable<Proveedor> {
    console.log(proveedor);
  	return this.http.post<Proveedor>(this.urlEndPointCreate, proveedor, {headers: this.httpHeaders} ).pipe (
        catchError(e => {
          console.log("error");
          console.log(e.error.mensaje);
          return throwError(e);
        })
        ) 
  }

  update(proveedor: Proveedor): Observable<Proveedor>{
    return this.http.put<Proveedor>(this.urlEndPointUpdate + proveedor.id, proveedor, {headers: this.httpHeaders}).pipe (
        catchError(e => {
          console.log("error");
          console.log(e.error.mensaje);
          return throwError(e);
        })
        )
  }

}
