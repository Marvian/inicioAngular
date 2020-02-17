import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
let LogService = class LogService {
    constructor(http) {
        this.http = http;
        this.urlEndPoint = 'http://localhost:8080/Log/readAll';
    }
    getLog() {
        return this.http.get(this.urlEndPoint).pipe(map(response => response));
    }
};
LogService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [HttpClient])
], LogService);
export { LogService };
//# sourceMappingURL=log.service.js.map