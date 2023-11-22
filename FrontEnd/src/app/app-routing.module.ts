import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TiposBecasComponent } from './components/becas/tipos-becas/tipos-becas.component';
import { VerBecasInternasComponent } from './components/becas/ver-becas-internas/ver-becas-internas.component';
import { VerBecasExternasComponent } from './components/becas/ver-becas-externas/ver-becas-externas.component';
import { InscripcionesComponent } from './components/inscripciones/inscripciones.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { CarrerasComponent } from './components/carreras/carreras.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent }, 
  { path: 'becas/tipos-becas', component: TiposBecasComponent },
  { path: 'becas/becas-internas', component: VerBecasInternasComponent },
  { path: 'becas/becas-externas', component: VerBecasExternasComponent },
  { path: 'inscripciones', component: InscripcionesComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'carreras', component: CarrerasComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
