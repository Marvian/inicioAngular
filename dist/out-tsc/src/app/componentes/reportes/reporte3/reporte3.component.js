import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { ListaNegraService } from '../../../servicios/lista-negra.service';
let Reporte3Component = class Reporte3Component {
    constructor(listaNegraService) {
        this.listaNegraService = listaNegraService;
    }
    ngOnInit() {
        this.listaNegraService.getListaNegra().subscribe(listasNegra => this.listasNegra = listasNegra);
    }
};
Reporte3Component = __decorate([
    Component({
        selector: 'app-reporte3',
        templateUrl: './reporte3.component.html',
        styleUrls: ['./reporte3.component.scss']
    }),
    __metadata("design:paramtypes", [ListaNegraService])
], Reporte3Component);
export { Reporte3Component };
//# sourceMappingURL=reporte3.component.js.map