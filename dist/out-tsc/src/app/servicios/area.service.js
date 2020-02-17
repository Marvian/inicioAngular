import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
let AreaService = class AreaService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.urlEndPoint = 'http://localhost:8080/area/readAll';
        this.urlEndPointRead = 'http://localhost:8080/area/read/';
        this.urlEndPointUpdate = 'http://localhost:8080/area/update/';
        this.httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    }
    getAreas() {
        return this.http.get(this.urlEndPoint).pipe(map(response => response));
    }
    getArea(id) {
        console.log(id);
        return this.http.get(this.urlEndPointRead + id).pipe(catchError(e => {
            this.router.navigate(['/area']);
            console.log("error");
            console.log(e.error.mensaje);
            return throwError(e);
        }));
    }
    update(area) {
        return this.http.put(this.urlEndPointUpdate + area.id, area, { headers: this.httpHeaders }).pipe(catchError(e => {
            console.log("error");
            console.log(e.error.mensaje);
            return throwError(e);
        }));
    }
};
AreaService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [HttpClient,
        Router])
], AreaService);
export { AreaService };
//# sourceMappingURL=area.service.js.map