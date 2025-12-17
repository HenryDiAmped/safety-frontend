import { Routes } from '@angular/router';
import { InicioComponent } from './funcionalidades/home/inicio';
import { NosotrosComponent } from './funcionalidades/nosotros/nosotros';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },

  { path: 'inicio', component: InicioComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: '**', redirectTo: 'inicio' },
];
