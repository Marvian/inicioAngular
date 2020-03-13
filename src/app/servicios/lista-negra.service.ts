import { Injectable } from '@angular/core';
import { ListaNegra } from '../modelos/listaNegra';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class ListaNegraService {

	private urlEndPoint: string = 'http://localhost:8080/blackList/readAll';
	private urlEndPointDelete: string = 'http://localhost:8080/blackList/delete';

  	constructor(private http: HttpClient,
  				private router: Router) { }

  	getListaNegra(): Observable<ListaNegra[]> {
  	
	  	return this.http.get(this.urlEndPoint).pipe(
	  		map(response => response as ListaNegra[])
	  	);
	}

	delete(id): Observable<ListaNegra>{
     console.log(id)
    return this.http.get<ListaNegra>(this.urlEndPointDelete + id).pipe (
        catchError(e => {
          this.router.navigate(['/listaNegra']);
          console.log("error");
          console.log(e.error.mensaje);
          return throwError(e);
        })
     )
  }
}
