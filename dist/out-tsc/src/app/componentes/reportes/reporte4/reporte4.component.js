import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { ProveedorService } from '../../../servicios/proveedor.service';
let Reporte4Component = class Reporte4Component {
    constructor(proveedorService) {
        this.proveedorService = proveedorService;
    }
    ngOnInit() {
        this.proveedorService.getProveedores().subscribe(proveedores => this.proveedores = proveedores);
    }
};
Reporte4Component = __decorate([
    Component({
        selector: 'app-reporte4',
        templateUrl: './reporte4.component.html',
        styleUrls: ['./reporte4.component.scss']
    }),
    __metadata("design:paramtypes", [ProveedorService])
], Reporte4Component);
export { Reporte4Component };
//# sourceMappingURL=reporte4.component.js.map