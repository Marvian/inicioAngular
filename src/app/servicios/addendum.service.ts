import { Injectable } from '@angular/core';
import { Addendum } from '../modelos/addendum';
import { Observable, of, throwError  } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class AddendumService {

  private urlEndPoint: string = 'http://localhost:8080/addendum/readAll';
  private urlEndPointRead: string = 'http://localhost:8080/addendum/read/';
  private urlEndPointUpdate: string = 'http://localhost:8080/addendum/update/';
	
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient, 
              private router: Router) {}

  getAddendums(): Observable<Addendum[]> {  	 
  		return this.http.get(this.urlEndPoint).pipe(map(
        response => response as Addendum[]));
  }

  getAddendum(id): Observable<Addendum>{
     console.log(id)
    return this.http.get<Addendum>(this.urlEndPointRead + id).pipe (
        catchError(e => {
          this.router.navigate(['/numerocorto']);
          console.log("error");
          console.log(e.error.mensaje);
          return throwError(e);
        })
        )
  }

  update(addendum: Addendum): Observable<Addendum>{
    return this.http.put<Addendum>(this.urlEndPointUpdate + addendum.id, addendum, {headers: this.httpHeaders}).pipe (
        catchError(e => {
          console.log("error");
          console.log(e.error.mensaje);
          return throwError(e);
        })
        )
  }
}
