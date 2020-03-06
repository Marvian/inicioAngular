import { Injectable } from '@angular/core';
import { Interface } from '../modelos/interface';
import { Observable, of, throwError  } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class InterfaceService {

  private urlEndPoint: string = 'http://localhost:8080/interface/readAll';
  private urlEndPointRead: string = 'http://localhost:8080/interface/read/';
  private urlEndPointUpdate: string = 'http://localhost:8080/interface/update/';
	
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient, 
              private router: Router) {}

  getInterfaces(): Observable<Interface[]> {  	 
  		return this.http.get(this.urlEndPoint).pipe(map(
        response => response as Interface[]));
  }

  getInterface(id): Observable<Interface>{
     console.log(id)
    return this.http.get<Interface>(this.urlEndPointRead + id).pipe (
        catchError(e => {
          this.router.navigate(['/numerocorto']);
          console.log("error");
          console.log(e.error.mensaje);
          return throwError(e);
        })
        )
  }

  update(Interface: Interface): Observable<Interface>{
    return this.http.put<Interface>(this.urlEndPointUpdate +Interface.id, Interface, {headers: this.httpHeaders}).pipe (
        catchError(e => {
          console.log("error");
          console.log(e.error.mensaje);
          return throwError(e);
        })
        )
  }
}
