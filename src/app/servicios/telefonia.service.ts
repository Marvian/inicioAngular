import { Injectable } from '@angular/core';
import { Telefonia } from '../modelos/telefonia';
import { Observable, of, throwError  } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
@Injectable()
export class TelefoniaService {

  private urlEndPoint: string = 'http://localhost:8080/telefonia/readAll';
  private urlEndPointRead: string = 'http://localhost:8080/telefonia/read/';
  private urlEndPointUpdate: string = 'http://localhost:8080/telefonia/update/';
	
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient, 
              private router: Router) {}

  getTelefonias(): Observable<Telefonia[]> {  	 
  		return this.http.get(this.urlEndPoint).pipe(map(
        response => response as Telefonia[]));
  }

  getTelefonia(id): Observable<Telefonia>{
     console.log(id)
    return this.http.get<Telefonia>(this.urlEndPointRead + id).pipe (
        catchError(e => {
          this.router.navigate(['/numerocorto']);
          console.log("error");
          console.log(e.error.mensaje);
          return throwError(e);
        })
        )
  }
}
