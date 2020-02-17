import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
let ConfiguracionSisService = class ConfiguracionSisService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.urlEndPoint = 'http://localhost:8080/configSistem/readAll';
        this.urlEndPointRead = 'http://localhost:8080/configSistem/read/';
        this.urlEndPointUpdate = 'http://localhost:8080/configSistem/update/';
        this.httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    }
    getConfiguraciones() {
        return this.http.get(this.urlEndPoint).pipe(map(response => response));
    }
    getConfiguracion(id) {
        return this.http.get(this.urlEndPointRead + id).pipe(catchError(e => {
            this.router.navigate(['/solicitudes']);
            console.log("error");
            console.log(e.error.mensaje);
            return throwError(e);
        }));
    }
    update(configuracion_sist) {
        return this.http.put(this.urlEndPointUpdate + configuracion_sist.id, configuracion_sist, { headers: this.httpHeaders }).pipe(catchError(e => {
            console.log("error");
            console.log(e.error.mensaje);
            return throwError(e);
        }));
    }
};
ConfiguracionSisService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [HttpClient,
        Router])
], ConfiguracionSisService);
export { ConfiguracionSisService };
//# sourceMappingURL=configuracion-sis.service.js.map