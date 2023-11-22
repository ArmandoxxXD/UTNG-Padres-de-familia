import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { TiposBecasComponent } from './components/becas/tipos-becas/tipos-becas.component';
import { VerBecasInternasComponent } from './components/becas/ver-becas-internas/ver-becas-internas.component';
import { VerBecasExternasComponent } from './components/becas/ver-becas-externas/ver-becas-externas.component';
import { InscripcionesComponent } from './components/inscripciones/inscripciones.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { CarrerasComponent } from './components/carreras/carreras.component';
import { InstalacionesComponent } from './components/instalaciones/instalaciones.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    TiposBecasComponent,
    VerBecasInternasComponent,
    VerBecasExternasComponent,
    InscripcionesComponent,
    ContactoComponent,
    CarrerasComponent,
    InstalacionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
