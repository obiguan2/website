import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
// rutas
import { APP_ROUTING } from './app.routes';

import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { DevelopingComponent } from './components/developing/developing.component';
import { TheoryComponent } from './components/theory/theory.component';
import { ConclusionsComponent } from './components/conclusions/conclusions.component';
import { FormComponent } from './components/form/form.component';
// forms
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// google MAP
import { AgmCoreModule } from '@agm/core';
import { FormBuscarComponent } from './components/form-buscar/form-buscar.component';
import { FormEliminarComponent } from './components/form-eliminar/form-eliminar.component';
import { ListComponent } from './components/list/list.component';
// firebase
import { AngularFireModule } from '@angular/fire';  // para conectarnos
import { environment } from '../environments/environment';  // donde se encuentra nuestras configuraciones
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormActualizarComponent } from './components/form-actualizar/form-actualizar.component';
import { FormActualizar1Component } from './components/form-actualizar1/form-actualizar1.component';
import { FormCreditCardComponent } from './components/form-credit-card/form-credit-card.component'; // para editar eliminar etc
// video
import { YoutubePlayerModule } from 'ngx-youtube-player';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    FooterComponent,
    MainComponent,
    DevelopingComponent,
    TheoryComponent,
    ConclusionsComponent,
    FormComponent,
    FormBuscarComponent,
    FormEliminarComponent,
    ListComponent,
    FormActualizarComponent,
    FormActualizar1Component,
    FormCreditCardComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyBNRWW7vqg8E6TPvFFc3Tq6Exhga8U3dAU' }),
    AngularFireModule.initializeApp(environment.firebase), // firebase
    AngularFirestoreModule,  // firebase
    YoutubePlayerModule // video
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
