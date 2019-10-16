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

const routes: Routes = [
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
    DatosProveedorComponent 
]