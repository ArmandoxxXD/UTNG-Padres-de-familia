import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

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
import { NieveComponent } from './efectos/nieve/nieve.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TecladoComponent } from './components/teclado/teclado.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

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
    InstalacionesComponent,
    NieveComponent,
    TecladoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added, Alertas de exepciones
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
