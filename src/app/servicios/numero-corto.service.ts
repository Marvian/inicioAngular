import { Injectable } from '@angular/core';
import { Numero } from '../modelos/numero';
import { Observable, of  } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class NumeroCortoService {

	private urlEndPoint: string = 'http://localhost:8080/shortCode/readAll';

  constructor(private http: HttpClient) { }

  getNumeroCorto(): Observable<Numero[]> {
  	
  	return this.http.get(this.urlEndPoint).pipe(
  		map(response => response as Numero[])
  	);
  }
}
