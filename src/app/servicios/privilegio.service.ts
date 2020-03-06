import { Injectable } from '@angular/core';
import { Privilegio } from '../modelos/privilegio';
import { Observable, of, throwError  } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class PrivilegioService {

  private urlEndPoint: string = 'http://localhost:8080/privilegio/readAll';
  private urlEndPointRead: string = 'http://localhost:8080/privilegio/read/';
  private urlEndPointUpdate: string = 'http://localhost:8080/privilegio/update/';
	
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient, 
              private router: Router) {}

  getPrivilegios(): Observable<Privilegio[]> {  	 
  		return this.http.get(this.urlEndPoint).pipe(map(
        response => response as Privilegio[]));
  }

  getPrivilegio(id): Observable<Privilegio>{
     console.log(id)
    return this.http.get<Privilegio>(this.urlEndPointRead + id).pipe (
        catchError(e => {
          this.router.navigate(['/numerocorto']);
          console.log("error");
          console.log(e.error.mensaje);
          return throwError(e);
        })
        )
  }

  update(privilegio: Privilegio): Observable<Privilegio>{
    return this.http.put<Privilegio>(this.urlEndPointUpdate + privilegio.id, privilegio, {headers: this.httpHeaders}).pipe (
        catchError(e => {
          console.log("error");
          console.log(e.error.mensaje);
          return throwError(e);
        })
        )
  }
}
