import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { EmpleadoService } from '../../servicios/empleado.service';
let EmpleadoComponent = class EmpleadoComponent {
    constructor(empleadoService) {
        this.empleadoService = empleadoService;
    }
    ngOnInit() {
        this.empleadoService.getEmpleados().subscribe(empleados => this.empleados = empleados);
    }
};
EmpleadoComponent = __decorate([
    Component({
        selector: 'app-empleado',
        templateUrl: './empleado.component.html',
        styleUrls: ['./empleado.component.scss']
    }),
    __metadata("design:paramtypes", [EmpleadoService])
], EmpleadoComponent);
export { EmpleadoComponent };
//# sourceMappingURL=empleado.component.js.map