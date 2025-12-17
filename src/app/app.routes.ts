import { Routes } from '@angular/router';
import { InicioComponent } from './funcionalidades/home/inicio';
import { NosotrosComponent } from './funcionalidades/nosotros/nosotros';
import { CursoLista } from './funcionalidades/cursos/curso-lista';
import { ContactoPageComponent } from './funcionalidades/contacto/contacto';
import { ServiciosVistaComponent } from './funcionalidades/servicios/servicios-vista';
export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'cursos', component: CursoLista },
  { path: 'contacto', component: ContactoPageComponent },
  { path: 'servicios', component: ServiciosVistaComponent },
  { path: '**', redirectTo: 'inicio' },
];
