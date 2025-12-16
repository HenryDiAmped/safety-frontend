import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
})
export class ContactoComponent {
  contactar() {
    console.log('Iniciando proceso de contacto...');
  }
}
