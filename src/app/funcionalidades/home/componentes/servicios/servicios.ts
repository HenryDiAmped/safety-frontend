import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
interface Servicio {
  titulo: string;
  descripcion: string;
  icono: string;
}
@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './servicios.html',
  styleUrls: ['./servicios.css'],
})
export class ServiciosComponent {
  listaServicios: Servicio[] = [
    {
      titulo: 'Capacitaciones SST',
      icono: 'school',
      descripcion:
        'Formación especializada en Seguridad y Salud en el Trabajo. Entrenamos a tu equipo para prevenir riesgos, cumpliendo con la Ley 29783 y normativas internacionales.',
    },
    {
      titulo: 'Ingeniería Contra Incendios',
      icono: 'engineering',
      descripcion:
        'Diseño e implementación de sistemas de detección y supresión basados en estándares NFPA. Protegemos activos críticos con tecnología de punta.',
    },
    {
      titulo: 'Respuesta a Emergencias',
      icono: 'health_and_safety',
      descripcion:
        'Entrenamiento táctico para brigadas: lucha contra incendios, primeros auxilios y evacuación. Simulacros reales para situaciones de alto estrés.',
    },
  ];
}
