import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, RouterModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
})
export class ContactoComponent {
  item = {
    fragment: 'contacto' 
  };
  contactar() {
    console.log('Iniciando proceso de contacto...');
  }
}
