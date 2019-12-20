import { Injectable } from '@angular/core';
import { Log } from '../modelos/log';
import { Observable, of  } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class LogService {

	private urlEndPoint: string = 'http://localhost:8080/Log/readAll';

  	constructor(private http: HttpClient) { }

  	getLog(): Observable<Log[]> {
  	
	  	return this.http.get(this.urlEndPoint).pipe(
	  		map(response => response as Log[])
	  	);
	}	
}