import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { ImpuestoService } from '../../servicios/impuesto.service';
import { ConfiguracionSisService } from '../../servicios/configuracion-sis.service';
let ConfigSistemaComponent = class ConfigSistemaComponent {
    constructor(impuestoService, ConfiguracionService) {
        this.impuestoService = impuestoService;
        this.ConfiguracionService = ConfiguracionService;
    }
    ngOnInit() {
        this.impuestoService.getImpuestos().subscribe(impuestos => this.impuestos = impuestos);
        this.ConfiguracionService.getConfiguracion(1).subscribe(configuracion => this.configuracion = configuracion);
    }
};
ConfigSistemaComponent = __decorate([
    Component({
        selector: 'app-config-sistema',
        templateUrl: './config-sistema.component.html',
        styleUrls: ['./config-sistema.component.scss']
    }),
    __metadata("design:paramtypes", [ImpuestoService,
        ConfiguracionSisService])
], ConfigSistemaComponent);
export { ConfigSistemaComponent };
//# sourceMappingURL=config-sistema.component.js.map