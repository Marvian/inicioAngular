import { Injectable } from '@angular/core';
import { ContactoProveedor } from '../modelos/contactoProveedor';
import { Observable, of, throwError  } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class ContactoProveedorService {

  private urlEndPoint: string = 'http://localhost:8080/contactoProveedor/readAll';
  private urlEndPointRead: string = 'http://localhost:8080/contactoProveedor/read/';
  private urlEndPointUpdate: string = 'http://localhost:8080/contactoProveedor/update/';
	
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient, 
              private router: Router) {}

  getContactosProveedor(): Observable<ContactoProveedor[]> {  	 
  		return this.http.get(this.urlEndPoint).pipe(map(
        response => response as ContactoProveedor[]));
  }

  getContactoProveedor(id): Observable<ContactoProveedor>{
     console.log(id)
    return this.http.get<ContactoProveedor>(this.urlEndPointRead + id).pipe (
        catchError(e => {
          this.router.navigate(['/numerocorto']);
          console.log("error");
          console.log(e.error.mensaje);
          return throwError(e);
        })
        )
  }

  update(contactoProveedor: ContactoProveedor): Observable<ContactoProveedor>{
    return this.http.put<ContactoProveedor>(this.urlEndPointUpdate + contactoProveedor.id, contactoProveedor, {headers: this.httpHeaders}).pipe (
        catchError(e => {
          console.log("error");
          console.log(e.error.mensaje);
          return throwError(e);
        })
        )
  }
}
