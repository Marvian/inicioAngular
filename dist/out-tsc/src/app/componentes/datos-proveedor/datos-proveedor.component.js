import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { Proveedor } from '../../modelos/proveedor';
import { ProveedorService } from '../../servicios/proveedor.service';
import { Router, ActivatedRoute } from '@angular/router';
let DatosProveedorComponent = class DatosProveedorComponent {
    constructor(proveedorService, router, activatedRoute) {
        this.proveedorService = proveedorService;
        this.router = router;
        this.activatedRoute = activatedRoute;
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
        console.log("trae el provedor");
        this.traerProveedor();
    }
    traerProveedor() {
        console.log("en el metodo");
        this.activatedRoute.params.subscribe(params => {
            let id = params['id'];
            if (id) {
                this.proveedorService.getProveedor(id).subscribe((proveedor) => this.proveedor = proveedor);
            }
        });
    }
    crearProveedor() {
        console.log("creando");
        console.log(this.proveedor);
        this.proveedorService.create(this.proveedor).subscribe(response => { this.router.navigate(['/proveedor']); });
    }
    modificarProveedor() {
        this.proveedorService.update(this.proveedor).subscribe(response => { this.router.navigate(['/proveedor']); });
    }
};
DatosProveedorComponent = __decorate([
    Component({
        selector: 'app-datos-proveedor',
        templateUrl: './datos-proveedor.component.html',
        styleUrls: ['./datos-proveedor.component.scss']
    }),
    __metadata("design:paramtypes", [ProveedorService,
        Router,
        ActivatedRoute])
], DatosProveedorComponent);
export { DatosProveedorComponent };
//# sourceMappingURL=datos-proveedor.component.js.map