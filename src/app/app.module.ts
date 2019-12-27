import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { NumeroCortoService } from './servicios/numero-corto.service';
import { ProveedorService } from './servicios/proveedor.service';
import { EmpleadoService } from './servicios/empleado.service';
import { LogService } from './servicios/log.service';
import { ListaNegraService } from './servicios/lista-negra.service';
import { HttpClientModule } from '@angular/common/http';



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
     ListaNegraService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
