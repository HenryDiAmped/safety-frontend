import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-valores',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './valores.html',
  styleUrl: './valores.css'
})
export class ValoresComponent {
  valores = [
    { id: '01', titulo: 'Innovación', texto: 'Buscamos nuevas formas tecnológicas de resolver problemas antiguos.', icon: 'lightbulb' },
    { id: '02', titulo: 'Integridad', texto: 'Actuamos con transparencia y ética en cada certificación.', icon: 'verified_user' },
    { id: '03', titulo: 'Excelencia', texto: 'No entregamos nada que no cumpla con el estándar máximo.', icon: 'military_tech' },
    { id: '04', titulo: 'Compromiso', texto: 'La seguridad de tu empresa es nuestra prioridad absoluta.', icon: 'handshake' }
  ];
}