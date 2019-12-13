import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { NumeroCortoService } from '../../servicios/numero-corto.service';
let NumeroCortoComponent = class NumeroCortoComponent {
    constructor(numeroCortoService) {
        this.numeroCortoService = numeroCortoService;
    }
    ngOnInit() {
        this.numeroCortoService.getNumeroCorto().subscribe(numeros => this.numeros = numeros);
    }
};
NumeroCortoComponent = __decorate([
    Component({
        selector: 'app-numero-corto',
        templateUrl: './numero-corto.component.html',
        styleUrls: ['./numero-corto.component.scss']
    }),
    __metadata("design:paramtypes", [NumeroCortoService])
], NumeroCortoComponent);
export { NumeroCortoComponent };
//# sourceMappingURL=numero-corto.component.js.map