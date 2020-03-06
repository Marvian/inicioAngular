import { Injectable } from '@angular/core';
import { TipoSolicitud } from '../modelos/tipoSolicitud';
import { Observable, of, throwError  } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class TipoSolicitudService {

  private urlEndPoint: string = 'http://localhost:8080/tipoSolicitud/readAll';
  private urlEndPointRead: string = 'http://localhost:8080/tipoSolicitud/read/';
  private urlEndPointUpdate: string = 'http://localhost:8080/tipoSolicitud/update/';
	
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient, 
              private router: Router) {}

  getTipoSolicituds(): Observable<TipoSolicitud[]> {  	 
  		return this.http.get(this.urlEndPoint).pipe(map(
        response => response as TipoSolicitud[]));
  }

  getTipoSolicitud(id): Observable<TipoSolicitud>{
     console.log(id)
    return this.http.get<TipoSolicitud>(this.urlEndPointRead + id).pipe (
        catchError(e => {
          this.router.navigate(['/numerocorto']);
          console.log("error");
          console.log(e.error.mensaje);
          return throwError(e);
        })
        )
  }
}
