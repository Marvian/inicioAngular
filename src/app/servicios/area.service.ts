import { Injectable } from '@angular/core';
import { Area } from '../modelos/area';
import { Observable, of, throwError  } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class AreaService {
  
  private urlEndPoint: string = 'http://localhost:8080/area/readAll';
  private urlEndPointRead: string = 'http://localhost:8080/area/read/';
  private urlEndPointUpdate: string = 'http://localhost:8080/area/update/';
	
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient, 
              private router: Router) {}

  getAreas(): Observable<Area[]> {  	 
  		return this.http.get(this.urlEndPoint).pipe(map(
        response => response as Area[]));
  }

  getArea(id): Observable<Area>{
     console.log(id)
    return this.http.get<Area>(this.urlEndPointRead + id).pipe (
        catchError(e => {
          this.router.navigate(['/area']);
          console.log("error");
          console.log(e.error.mensaje);
          return throwError(e);
        })
        )
  }

  update(area: Area): Observable<Area>{
    return this.http.put<Area>(this.urlEndPointUpdate + area.id, area, {headers: this.httpHeaders}).pipe (
        catchError(e => {
          console.log("error");
          console.log(e.error.mensaje);
          return throwError(e);
        })
        )
  }


}
