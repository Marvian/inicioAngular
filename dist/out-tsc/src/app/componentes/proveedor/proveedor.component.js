import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { ProveedorService } from '../../servicios/proveedor.service';
let ProveedorComponent = class ProveedorComponent {
    constructor(proveedorService) {
        this.proveedorService = proveedorService;
    }
    ngOnInit() {
        this.proveedorService.getProveedor().subscribe(proveedores => this.proveedores = proveedores);
    }
};
ProveedorComponent = __decorate([
    Component({
        selector: 'app-proveedor',
        templateUrl: './proveedor.component.html',
        styleUrls: ['./proveedor.component.scss']
    }),
    __metadata("design:paramtypes", [ProveedorService])
], ProveedorComponent);
export { ProveedorComponent };
//# sourceMappingURL=proveedor.component.js.map