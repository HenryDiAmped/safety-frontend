import { Component } from '@angular/core';
import { ContactoComponent } from '../home/componentes/contacto/contacto';

@Component({
  selector: 'app-contacto-page',
  standalone: true,
  imports: [ContactoComponent],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
})
export class ContactoPageComponent {}