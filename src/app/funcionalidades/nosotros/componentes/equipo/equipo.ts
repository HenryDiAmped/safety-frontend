import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-equipo',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './equipo.html',
  styleUrls: ['./equipo.css']
})
export class EquipoComponent {
  team = [
    { name: 'Rojas B. Everson E.', role: 'Gerente', image: 'https://cdn.midjourney.com/ea35214f-1f8f-4cea-85f4-f95ad3788edd/0_0.png' },
    { name: 'Rojas B. Everson E.', role: 'Gerente', image: 'https://cdn.midjourney.com/ea35214f-1f8f-4cea-85f4-f95ad3788edd/0_0.png' },
    { name: 'Rojas B. Everson E.', role: 'Gerente', image: 'https://cdn.midjourney.com/ea35214f-1f8f-4cea-85f4-f95ad3788edd/0_0.png' }
  ];
}