import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
let ProveedorService = class ProveedorService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.urlEndPoint = 'http://localhost:8080/provider/readAll';
        this.urlEndPointRead = 'http://localhost:8080/provider/read/';
        this.urlEndPointCreate = 'http://localhost:8080/provider/create';
        this.urlEndPointUpdate = 'http://localhost:8080/provider/update/';
        this.httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    }
    getProveedores() {
        return this.http.get(this.urlEndPoint).pipe(map(response => response));
    }
    getProveedor(id) {
        console.log(id);
        return this.http.get(this.urlEndPointRead + id).pipe(catchError(e => {
            this.router.navigate(['/proveedor']);
            console.log("error");
            console.log(e.error.mensaje);
            return throwError(e);
        }));
    }
    create(proveedor) {
        console.log(proveedor);
        return this.http.post(this.urlEndPointCreate, proveedor, { headers: this.httpHeaders }).pipe(catchError(e => {
            console.log("error");
            console.log(e.error.mensaje);
            return throwError(e);
        }));
    }
    update(proveedor) {
        return this.http.put(this.urlEndPointUpdate + proveedor.id, proveedor, { headers: this.httpHeaders }).pipe(catchError(e => {
            console.log("error");
            console.log(e.error.mensaje);
            return throwError(e);
        }));
    }
};
ProveedorService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [HttpClient,
        Router])
], ProveedorService);
export { ProveedorService };
//# sourceMappingURL=proveedor.service.js.map