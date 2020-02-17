import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { AreaService } from '../../servicios/area.service';
let AreaComponent = class AreaComponent {
    constructor(areaService) {
        this.areaService = areaService;
    }
    ngOnInit() {
        this.areaService.getAreas().subscribe(areas => this.areas = areas);
    }
};
AreaComponent = __decorate([
    Component({
        selector: 'app-area',
        templateUrl: './area.component.html',
        styleUrls: ['./area.component.scss']
    }),
    __metadata("design:paramtypes", [AreaService])
], AreaComponent);
export { AreaComponent };
//# sourceMappingURL=area.component.js.map