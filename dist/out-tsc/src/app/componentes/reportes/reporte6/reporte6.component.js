import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { LogService } from '../../../servicios/log.service';
let Reporte6Component = class Reporte6Component {
    constructor(logService) {
        this.logService = logService;
    }
    ngOnInit() {
        this.logService.getLog().subscribe(logs => this.logs = logs);
    }
};
Reporte6Component = __decorate([
    Component({
        selector: 'app-reporte6',
        templateUrl: './reporte6.component.html',
        styleUrls: ['./reporte6.component.scss']
    }),
    __metadata("design:paramtypes", [LogService])
], Reporte6Component);
export { Reporte6Component };
//# sourceMappingURL=reporte6.component.js.map