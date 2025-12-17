import { Routes } from '@angular/router';
import { InicioComponent } from './funcionalidades/home/inicio';
import { NosotrosComponent } from './funcionalidades/nosotros/nosotros';
import { CursoLista } from './funcionalidades/cursos/curso-lista';
import { ContactoPageComponent } from './funcionalidades/contacto/contacto';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },

  { path: 'inicio', component: InicioComponent },
  { path: 'nosotros', component: NosotrosComponent },

  { path: 'cursos', component: CursoLista },

  { path: 'contacto', component: ContactoPageComponent },

  { path: '**', redirectTo: 'inicio' },
];
