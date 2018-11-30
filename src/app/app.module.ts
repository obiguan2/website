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
// forms
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// google MAP
import { AgmCoreModule } from '@agm/core';

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
    ConclusionsComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyBNRWW7vqg8E6TPvFFc3Tq6Exhga8U3dAU' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
