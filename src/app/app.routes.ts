import { Routes } from '@angular/router';
import { InicioComponent } from './funcionalidades/home/inicio';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },

  { path: 'inicio', component: InicioComponent },

  { path: '**', redirectTo: 'inicio' },
];
