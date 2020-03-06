import { Injectable } from '@angular/core';
import { Traspaso } from '../modelos/traspaso';
import { Observable, of, throwError  } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class TraspasoService {

  private urlEndPoint: string = 'http://localhost:8080/traspaso/readAll';
  private urlEndPointRead: string = 'http://localhost:8080/traspaso/read/';
  private urlEndPointUpdate: string = 'http://localhost:8080/traspaso/update/';
	
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient, 
              private router: Router) {}

  getTraspasos(): Observable<Traspaso[]> {  	 
  		return this.http.get(this.urlEndPoint).pipe(map(
        response => response as Traspaso[]));
  }

  getTraspaso(id): Observable<Traspaso>{
     console.log(id)
    return this.http.get<Traspaso>(this.urlEndPointRead + id).pipe (
        catchError(e => {
          this.router.navigate(['/numerocorto']);
          console.log("error");
          console.log(e.error.mensaje);
          return throwError(e);
        })
        )
  }

  update(traspaso: Traspaso): Observable<Traspaso>{
    return this.http.put<Traspaso>(this.urlEndPointUpdate + traspaso.id, traspaso, {headers: this.httpHeaders}).pipe (
        catchError(e => {
          console.log("error");
          console.log(e.error.mensaje);
          return throwError(e);
        })
        )
  }
}
