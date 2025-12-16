import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
export interface Beneficio {
  titulo: string;
  descripcion: string;
  icono: string;
  imagenUrl: string;
}
@Component({
  selector: 'app-beneficios',
  standalone: true,
  imports: [CommonModule, MatListModule, MatIconModule],
  templateUrl: './beneficios.html',
  styleUrl: './beneficios.css',
})
export class BeneficiosComponent {
  indiceActivo: number = 0;
  listaBeneficios: Beneficio[] = [
    {
      titulo: 'Experiencia y profesionalismo',
      descripcion:
        'Más de 4000 empresas usan R & R para la formación de sus equipos con estándares de ingeniería.',
      icono: 'school',
      imagenUrl: 'https://cdn.midjourney.com/f6fcaace-db70-4a67-926f-cffc09055f73/0_3.png',
    },
    {
      titulo: 'Soluciones Integrales',
      descripcion:
        'Brindamos soluciones tecnológicas y de diseño innovadoras que potencian la transformación digital.',
      icono: 'security',
      imagenUrl: 'https://cdn.midjourney.com/85808920-a8c4-4dd5-8f41-fe819568e301/0_3.png',
    },
    {
      titulo: 'Atención Personalizada',
      descripcion:
        'Productos de alta calidad centrados en la experiencia del usuario final y sus necesidades específicas.',
      icono: 'groups',
      imagenUrl: 'https://cdn.midjourney.com/7e79a2a3-29a8-416e-b8d6-fa93c8005fb1/0_0.png',
    },
    {
      titulo: 'Cumplimiento Normativo',
      descripcion:
        'Desarrollos alineados estrictamente con las normativas vigentes de seguridad y construcción.',
      icono: 'gavel',
      imagenUrl: 'https://cdn.midjourney.com/9e2949a6-5dd0-40a8-9c0d-727f20980fa9/0_2.png',
    },
  ];
  activarBeneficio(index: number): void {
    this.indiceActivo = index;
  }
}
