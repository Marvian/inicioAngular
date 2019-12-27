import { Injectable } from '@angular/core';
import { ListaNegra } from '../modelos/listaNegra';
import { Observable, of  } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class ListaNegraService {

	private urlEndPoint: string = 'http://localhost:8080/blackList/readAll';

  	constructor(private http: HttpClient) { }

  	getListaNegra(): Observable<ListaNegra[]> {
  	
	  	return this.http.get(this.urlEndPoint).pipe(
	  		map(response => response as ListaNegra[])
	  	);
	}
}
