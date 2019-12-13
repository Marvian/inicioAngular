import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
let ProveedorService = class ProveedorService {
    constructor(http) {
        this.http = http;
        this.urlEndPoint = 'http://localhost:8080/provider/readAll';
    }
    getProveedor() {
        return this.http.get(this.urlEndPoint).pipe(map(response => response));
    }
};
ProveedorService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [HttpClient])
], ProveedorService);
export { ProveedorService };
//# sourceMappingURL=proveedor.service.js.map