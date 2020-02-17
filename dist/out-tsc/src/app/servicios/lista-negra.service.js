import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
let ListaNegraService = class ListaNegraService {
    constructor(http) {
        this.http = http;
        this.urlEndPoint = 'http://localhost:8080/blackList/readAll';
    }
    getListaNegra() {
        return this.http.get(this.urlEndPoint).pipe(map(response => response));
    }
};
ListaNegraService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [HttpClient])
], ListaNegraService);
export { ListaNegraService };
//# sourceMappingURL=lista-negra.service.js.map