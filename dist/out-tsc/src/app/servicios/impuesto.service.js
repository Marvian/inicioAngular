import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
let ImpuestoService = class ImpuestoService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.urlEndPoint = 'http://localhost:8080/impost/readAll';
        this.urlEndPointRead = 'http://localhost:8080/impost/read/';
        this.urlEndPointUpdate = 'http://localhost:8080/impost/update/';
        this.httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    }
    getImpuestos() {
        return this.http.get(this.urlEndPoint).pipe(map(response => response));
    }
    getImpuesto(id) {
        console.log(id);
        return this.http.get(this.urlEndPointRead + id).pipe(catchError(e => {
            this.router.navigate(['/solicitudes']);
            console.log("error");
            console.log(e.error.mensaje);
            return throwError(e);
        }));
    }
    update(impuesto) {
        return this.http.put(this.urlEndPointUpdate + impuesto.id, impuesto, { headers: this.httpHeaders }).pipe(catchError(e => {
            console.log("error");
            console.log(e.error.mensaje);
            return throwError(e);
        }));
    }
};
ImpuestoService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [HttpClient,
        Router])
], ImpuestoService);
export { ImpuestoService };
//# sourceMappingURL=impuesto.service.js.map