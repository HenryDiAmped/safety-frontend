import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-mision-vision',
  standalone: true,
  imports: [MatCardModule, MatIconModule],
  templateUrl: './mision-vision.html',
  styleUrls: ['./mision-vision.css'],
})
export class MisionVisionComponent {
  corporateData = [
    {
      title: 'Misión',
      text: 'Brindar soluciones tecnológicas y de diseño innovadoras que potencien la transformación digital de nuestros clientes.',
      icon: 'verified_user',
    },
    {
      title: 'Visión',
      text: 'Ofrecer productos de alta calidad centrados en la experiencia del usuario y desarrollados con los más altos estándares de ingeniería.',
      icon: 'visibility',
    },
  ];
}
