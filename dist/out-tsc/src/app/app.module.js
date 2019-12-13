import { __decorate } from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NumeroCortoService } from './servicios/numero-corto.service';
import { ProveedorService } from './servicios/proveedor.service';
import { EmpleadoService } from './servicios/empleado.service';
import { HttpClientModule } from '@angular/common/http';
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            routingComponents
        ],
        imports: [
            BrowserModule,
            HttpClientModule,
            AppRoutingModule,
            FormsModule,
            ReactiveFormsModule
        ],
        providers: [
            NumeroCortoService,
            EmpleadoService,
            ProveedorService
        ],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map