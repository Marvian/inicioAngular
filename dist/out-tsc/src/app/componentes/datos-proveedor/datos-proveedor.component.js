import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { Proveedor } from '../../modelos/proveedor';
let DatosProveedorComponent = class DatosProveedorComponent {
    constructor() {
        this.proveedor = new Proveedor();
        this.titulo = "Crear proveedor";
        this.segundo = false;
        this.contactoDos = false;
        this.contactoTres = false;
    }
    agregarContactoDos() {
        this.contactoDos = (this.contactoDos == true) ? false : true;
    }
    agregarContactoTres() {
        this.contactoTres = (this.contactoTres == true) ? false : true;
    }
    ngOnInit() {
    }
    crearproveedor() {
        console.log("creando");
        console.log(this.proveedor);
    }
};
DatosProveedorComponent = __decorate([
    Component({
        selector: 'app-datos-proveedor',
        templateUrl: './datos-proveedor.component.html',
        styleUrls: ['./datos-proveedor.component.scss']
    }),
    __metadata("design:paramtypes", [])
], DatosProveedorComponent);
export { DatosProveedorComponent };
//# sourceMappingURL=datos-proveedor.component.js.map