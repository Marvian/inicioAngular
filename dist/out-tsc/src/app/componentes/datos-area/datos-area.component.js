import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { Area } from '../../modelos/area';
import { AreaService } from '../../servicios/area.service';
import { Router, ActivatedRoute } from '@angular/router';
let DatosAreaComponent = class DatosAreaComponent {
    constructor(areaService, router, activatedRoute) {
        this.areaService = areaService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.area = new Area();
    }
    ngOnInit() {
        console.log("trae el area");
        this.traerArea();
    }
    traerArea() {
        console.log("en el metodo");
        this.activatedRoute.params.subscribe(params => {
            let id = params['id'];
            if (id) {
                this.areaService.getArea(id).subscribe((area) => this.area = area);
            }
        });
    }
    modificarArea() {
        this.areaService.update(this.area).subscribe(response => { this.router.navigate(['/area']); });
    }
};
DatosAreaComponent = __decorate([
    Component({
        selector: 'app-datos-area',
        templateUrl: './datos-area.component.html',
        styleUrls: ['./datos-area.component.scss']
    }),
    __metadata("design:paramtypes", [AreaService,
        Router,
        ActivatedRoute])
], DatosAreaComponent);
export { DatosAreaComponent };
//# sourceMappingURL=datos-area.component.js.map