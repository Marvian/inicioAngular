import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
let SolicitudService = class SolicitudService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.urlEndPoint = 'http://localhost:8080/solicitud/readAll';
        this.urlEndPointRead = 'http://localhost:8080/solicitud/read/';
        this.urlEndPointCreate = 'http://localhost:8080/solicitud/create';
        this.urlEndPointUpdate = 'http://localhost:8080/solicitud/update/';
        this.httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    }
    getSolicitudes() {
        return this.http.get(this.urlEndPoint).pipe(map(response => response));
    }
    getSolicitud(id) {
        console.log(id);
        return this.http.get(this.urlEndPointRead + id).pipe(catchError(e => {
            this.router.navigate(['/solicitudes']);
            console.log("error");
            console.log(e.error.mensaje);
            return throwError(e);
        }));
    }
    create(solicitud) {
        console.log(solicitud);
        return this.http.post(this.urlEndPointCreate, solicitud, { headers: this.httpHeaders }).pipe(catchError(e => {
            console.log("error");
            console.log(e.error.mensaje);
            return throwError(e);
        }));
    }
    update(solicitud) {
        return this.http.put(this.urlEndPointUpdate + solicitud.id, solicitud, { headers: this.httpHeaders }).pipe(catchError(e => {
            console.log("error");
            console.log(e.error.mensaje);
            return throwError(e);
        }));
    }
};
SolicitudService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [HttpClient,
        Router])
], SolicitudService);
export { SolicitudService };
//# sourceMappingURL=solicitud.service.js.map