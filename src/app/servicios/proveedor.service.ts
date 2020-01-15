import { Injectable } from '@angular/core';
import { Proveedor } from '../modelos/proveedor';
import { Observable, of  } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class ProveedorService {

  private urlEndPoint: string = 'http://localhost:8080/provider/readAll';
  private urlEndPointRead: string = 'http://localhost:8080/provider/read';
  private urlEndPointCreate: string = 'http://localhost:8080/provider/create';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

   constructor(private http: HttpClient) {}

   getProveedores(): Observable<Proveedor[]> {  	 
  		return this.http.get(this.urlEndPoint).pipe(map(
        response => response as Proveedor[])
  	);
  	}

    getProveedor(id): Observable<Proveedor>{
     console.log(id)
    return this.http.get<Proveedor>('http://localhost:8080/provider/read/'+id)
  };


  create(proveedor: Proveedor) : Observable<Proveedor> {
    console.log(proveedor)
  	return this.http.post<Proveedor>(this.urlEndPointCreate, proveedor, {headers: this.httpHeaders} ) 
  
  }

}
