import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FormularioContactoComponent } from './componentes/formulario-contacto/formulario-contacto';

@Component({
  selector: 'app-contacto-page',
  standalone: true,
  imports: [CommonModule, MatIconModule, FormularioContactoComponent],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
})
export class ContactoPageComponent {}