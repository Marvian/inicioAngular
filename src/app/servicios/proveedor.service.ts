import { Injectable } from '@angular/core';
import { Proveedor } from '../modelos/proveedor';
import { Observable, of  } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class ProveedorService {

  private urlEndPoint: string = 'http://localhost:8080/provider/readAll';
  private urlEndPointCreate: string = 'http://localhost:8080/provider/create';

  	private httpHeaders = new HttpHeaders ({'Content-Type': 'applcation/json'})

   constructor(private http: HttpClient) { }

    getProveedor(): Observable<Proveedor[]> {  	 
  		return this.http.get(this.urlEndPoint).pipe(map(response => response as Proveedor[])
  	);
  	}

  create(proveedor: Proveedor) : Observable<Proveedor> {
  	return this.http.post<Proveedor>(this.urlEndPointCreate, Proveedor, {headers: this.httpHeaders} ) 
  }

}
