import { Injectable } from '@angular/core';
import { Numero } from '../modelos/numero';
import { Observable, of  } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class NumeroCortoService {

  constructor() { }

  getNumeroCorto(): Observable<Numero[]> {
  	return of(null);
  }
}
