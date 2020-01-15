import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroComponent } from './componentes/registro/registro.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { FormNuevoNumeroComponent } from './componentes/form-nuevo-numero/form-nuevo-numero.component';
import { FormCierreNumeroComponent } from './componentes/form-cierre-numero/form-cierre-numero.component';
import { FormTraspasoNumeroComponent } from './componentes/form-traspaso-numero/form-traspaso-numero.component';
import { FormBloqueoNumeroComponent } from './componentes/form-bloqueo-numero/form-bloqueo-numero.component';
import { NuevaContrasenaComponent } from './componentes/nueva-contrasena/nueva-contrasena.component';
import { SolicitudesComponent } from './componentes/solicitudes/solicitudes.component';
import { FormCambioTarifaComponent } from './componentes/form-cambio-tarifa/form-cambio-tarifa.component';
import { EmpleadoComponent } from './componentes/empleado/empleado.component';
import { ProveedorComponent } from './componentes/proveedor/proveedor.component';
import { AprovacionncComponent } from './componentes/aprovacionnc/aprovacionnc.component';
import { NumeroCortoComponent } from './componentes/numero-corto/numero-corto.component';
import { AddendumComponent } from './componentes/addendum/addendum.component';
import { ConfigSistemaComponent } from './componentes/config-sistema/config-sistema.component';
import { DatosProveedorComponent } from './componentes/datos-proveedor/datos-proveedor.component';
import { ReportesComponent } from './componentes/reportes/reportes.component';
import { Reporte1Component } from './componentes/reportes/reporte1/reporte1.component';
import { Reporte2Component } from './componentes/reportes/reporte2/reporte2.component';
import { Reporte3Component } from './componentes/reportes/reporte3/reporte3.component';
import { Reporte4Component } from './componentes/reportes/reporte4/reporte4.component';
import { Reporte6Component } from './componentes/reportes/reporte6/reporte6.component';

const routes: Routes = [
	{ path: '', redirectTo: '/solicitudes', pathMatch: 'full'},
	{ path: 'ingreso', component: RegistroComponent },
	{ path: 'menu', component: MenuComponent },
	{ path: 'nuevonumero', component: FormNuevoNumeroComponent },
	{ path: 'traspasonumero', component: FormTraspasoNumeroComponent},
	{ path: 'cancelarnumero', component: FormCierreNumeroComponent},
	{ path: 'bloqueonumero', component: FormBloqueoNumeroComponent},
	{ path: 'nuevacontrasena', component: NuevaContrasenaComponent},
	{ path: 'solicitudes', component: SolicitudesComponent},
	{ path: 'cambiotarifa', component: FormCambioTarifaComponent},
	{ path: 'empleado', component: EmpleadoComponent},
	{ path: 'proveedor', component: ProveedorComponent},
	{ path: 'aprovacionnc', component: AprovacionncComponent},
	{ path: 'numerocorto', component: NumeroCortoComponent},
	{ path: 'addendum', component: AddendumComponent},
	{ path: 'config_sistema', component: ConfigSistemaComponent},
	{ path: 'datos-proveedor', component: DatosProveedorComponent},
	{ path: 'proveedor/datos-proveedor/:id', component: DatosProveedorComponent},
	{ path: 'reportes', component: ReportesComponent},
	{ path: 'reporte1', component: Reporte1Component},
	{ path: 'reporte2', component: Reporte2Component},
	{ path: 'reporte3', component: Reporte3Component},
	{ path: 'reporte4', component: Reporte4Component},
	{ path: 'reporte6', component: Reporte6Component}
]; 

 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
	RegistroComponent,  
	MenuComponent, 
	FormNuevoNumeroComponent,
	FormTraspasoNumeroComponent,
	FormCierreNumeroComponent,
    FormBloqueoNumeroComponent,
    NuevaContrasenaComponent,
    SolicitudesComponent,
    FormCambioTarifaComponent,
    EmpleadoComponent,
    ProveedorComponent,
    AprovacionncComponent,
    NumeroCortoComponent,
    AddendumComponent,
    ConfigSistemaComponent,
    DatosProveedorComponent,
    ReportesComponent,
    Reporte1Component,
    Reporte2Component,
    Reporte3Component,
    Reporte4Component,
    Reporte6Component
]