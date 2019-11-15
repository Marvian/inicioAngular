import { Injectable } from '@angular/core';
import { Numero } from '../modelos/numero';
import { Observable, of  } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class NumeroCortoService {

	private urlEndPoint: string = 'http://localhosto:8080/shotCode/ReadShortCode';

  constructor(private http: HttpClient) { }

  getNumeroCorto(): Observable<Numero[]> {
  	
  	return this.http.get<Numero[]>(this.urlEndPoint);
  }
}
