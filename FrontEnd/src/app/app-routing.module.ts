import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TiposBecasComponent } from './components/becas/tipos-becas/tipos-becas.component';
import { VerBecasInternasComponent } from './components/becas/ver-becas-internas/ver-becas-internas.component';
import { VerBecasExternasComponent } from './components/becas/ver-becas-externas/ver-becas-externas.component';
import { InscripcionesComponent } from './components/inscripciones/inscripciones.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { InstalacionesComponent } from './components/instalaciones/instalaciones.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent }, 
  { path: 'tipos-becas', component: TiposBecasComponent },
  { path: 'becas-internas', component: VerBecasInternasComponent },
  { path: 'becas-externas', component: VerBecasExternasComponent },
  { path: 'inscripciones', component: InscripcionesComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'instalaciones', component: InstalacionesComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
