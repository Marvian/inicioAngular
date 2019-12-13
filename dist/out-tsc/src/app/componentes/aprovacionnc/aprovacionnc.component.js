import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { Solicitud } from '../../modelos/solicitud';
let AprovacionncComponent = class AprovacionncComponent {
    constructor() {
        this.solicitudes = [
            new Solicitud(1, 4589, 'Apertura', 'DIRECTV', 'PostPago', '2019-08-14'),
            new Solicitud(2, 48621, 'Apertura', 'INTERCABLE', 'PostPago', '2019-08-13')
        ];
    }
    ngOnInit() {
    }
};
AprovacionncComponent = __decorate([
    Component({
        selector: 'app-aprovacionnc',
        templateUrl: './aprovacionnc.component.html',
        styleUrls: ['./aprovacionnc.component.scss']
    }),
    __metadata("design:paramtypes", [])
], AprovacionncComponent);
export { AprovacionncComponent };
//# sourceMappingURL=aprovacionnc.component.js.map