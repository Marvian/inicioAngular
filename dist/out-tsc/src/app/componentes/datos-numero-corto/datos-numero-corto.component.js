var _a;
import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { Numero } from '../../modelos/numero';
import { Router, ActivatedRoute } from '@angular/router';
let DatosNumeroCortoComponent = class DatosNumeroCortoComponent {
    constructor(areaService, router, activatedRoute) {
        this.areaService = areaService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.numero = new Numero();
    }
    ngOnInit() {
    }
};
DatosNumeroCortoComponent = __decorate([
    Component({
        selector: 'app-datos-numero-corto',
        templateUrl: './datos-numero-corto.component.html',
        styleUrls: ['./datos-numero-corto.component.scss']
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof AreaService !== "undefined" && AreaService) === "function" ? _a : Object, Router,
        ActivatedRoute])
], DatosNumeroCortoComponent);
export { DatosNumeroCortoComponent };
//# sourceMappingURL=datos-numero-corto.component.js.map