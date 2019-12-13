import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
let NumeroCortoService = class NumeroCortoService {
    constructor(http) {
        this.http = http;
        this.urlEndPoint = 'http://localhost:8080/shortCode/readAll';
    }
    getNumeroCorto() {
        return this.http.get(this.urlEndPoint).pipe(map(response => response));
    }
};
NumeroCortoService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [HttpClient])
], NumeroCortoService);
export { NumeroCortoService };
//# sourceMappingURL=numero-corto.service.js.map