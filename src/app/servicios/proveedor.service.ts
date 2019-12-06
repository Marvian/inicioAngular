import { Injectable } from '@angular/core';
import { Proveedor } from '../modelos/proveedor';
import { Observable, of  } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class ProveedorService {

  private urlEndPoint: string = 'http://localhost:8080/provider/readAll';

   constructor(private http: HttpClient) { }

    getProveedor(): Observable<Proveedor[]> {
  	 
  	return this.http.get(this.urlEndPoint).pipe(
  		map(response => response as Proveedor[])
  	);

  }
}
