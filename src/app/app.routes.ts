// ng2-routes
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { MainComponent } from './components/main/main.component';
import { TheoryComponent } from './components/theory/theory.component';
import { DevelopingComponent } from './components/developing/developing.component';
import { ConclusionsComponent } from './components/conclusions/conclusions.component';
import { ListComponent } from './components/list/list.component';
import { HelpComponent } from './components/help/help.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'main', component: MainComponent },
    { path: 'theory', component: TheoryComponent },
    { path: 'developing', component: DevelopingComponent },
    { path: 'conclusions', component: ConclusionsComponent },
    { path: 'about', component: AboutComponent },
    { path: 'list', component: ListComponent },
    { path: 'help', component: HelpComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
