import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
let EmpleadoService = class EmpleadoService {
    constructor(http) {
        this.http = http;
        this.urlEndPoint = 'http://localhost:8080/employee/readEmployee';
    }
    getEmpleado() {
        return this.http.get(this.urlEndPoint).pipe(map(response => response));
    }
};
EmpleadoService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [HttpClient])
], EmpleadoService);
export { EmpleadoService };
//# sourceMappingURL=empleado.service.js.map