import { Routes } from '@angular/router';
import { InicioComponent } from './funcionalidades/home/inicio';
import { CursoLista } from './funcionalidades/cursos/curso-lista';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },

  { path: 'inicio', component: InicioComponent },

  { path: 'cursos', component: CursoLista },

  { path: '**', redirectTo: 'inicio' },
];
