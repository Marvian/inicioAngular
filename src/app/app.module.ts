import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { NumeroCortoService } from './servicios/numero-corto.service';
import { ProveedorService } from './servicios/proveedor.service';
import { EmpleadoService } from './servicios/empleado.service';
import { LogService } from './servicios/log.service';
import { ListaNegraService } from './servicios/lista-negra.service';
import { AreaService } from './servicios/area.service';
import { ImpuestoService } from './servicios/impuesto.service';
import { ConfiguracionSisService } from './servicios/configuracion-sis.service';
import { SolicitudService } from './servicios/solicitud.service';
import { AddendumService } from './servicios/addendum.service';
import { ContratoService } from './servicios/contrato.service';
import { ContactoProveedorService } from './servicios/contacto-proveedor.service';
import { InterfaceService } from './servicios/interface.service';
import { PrivilegioService } from './servicios/privilegio.service';
import { EjemploContenidoService } from './servicios/ejemplo-contenido.service';
import { TipoContratoService } from './servicios/tipo-contrato.service';
import { TelefoniaService } from './servicios/telefonia.service';
import { TarifaService } from './servicios/tarifa.service';
import { TarifaPremiumService } from './servicios/tarifa-premium.service';
import { TarifaBaseService } from './servicios/tarifa-base.service';
import { TipoSolicitudService } from './servicios/tipo-solicitud.service';
import { TraspasoService } from './servicios/traspaso.service';
import { UltimaContraseñaService } from './servicios/ultima-contraseña.service';
import { UnidadMonetariaService } from './servicios/unidad-monetaria.service';


@NgModule({
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
     ProveedorService,
     LogService,
     ListaNegraService,
     AreaService,
     ImpuestoService,
     ConfiguracionSisService,
     SolicitudService,
     AddendumService,
     ContratoService,
     ContactoProveedorService,
     InterfaceService,
     PrivilegioService,
     EjemploContenidoService,
     TipoContratoService,
     TelefoniaService,
     TarifaService,
     TarifaPremiumService,
     TarifaBaseService,
     TipoSolicitudService,
     TraspasoService,
     UltimaContraseñaService,
     UnidadMonetariaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
