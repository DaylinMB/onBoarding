import { Routes } from '@angular/router';
import { EscenaComponent } from './escena/escena.component';
import { HomeComponent } from './home/home.component';


export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'escena', component: EscenaComponent },
];