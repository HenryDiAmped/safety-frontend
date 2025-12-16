import { Component } from '@angular/core';
import { FormularioContactoComponent } from './componentes/formulario-contacto/formulario-contacto';

@Component({
  selector: 'app-contacto-page',
  standalone: true,
  imports: [FormularioContactoComponent],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
})
export class ContactoPageComponent {}