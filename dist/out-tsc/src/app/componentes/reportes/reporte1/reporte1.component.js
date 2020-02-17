import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { ProveedorService } from '../../../servicios/proveedor.service';
let Reporte1Component = class Reporte1Component {
    constructor(proveedorService) {
        this.proveedorService = proveedorService;
    }
    ngOnInit() {
        this.proveedorService.getProveedores().subscribe(proveedores => this.proveedores = proveedores);
    }
};
Reporte1Component = __decorate([
    Component({
        selector: 'app-reporte1',
        templateUrl: './reporte1.component.html',
        styleUrls: ['./reporte1.component.scss']
    }),
    __metadata("design:paramtypes", [ProveedorService])
], Reporte1Component);
export { Reporte1Component };
//# sourceMappingURL=reporte1.component.js.map