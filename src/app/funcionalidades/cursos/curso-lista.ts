import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerCursosComponent } from './componentes/banner-cursos/banner-cursos';
import { ListaInfoComponent } from './componentes/lista-info/lista-info';

export interface Curso {
  instructor: string;
  titulo: string;
  descripcion: string;
  precio: number;
  imagenUrl?: string;
}

@Component({
  selector: 'app-curso-lista',
  standalone: true,
  imports: [
    CommonModule,
    BannerCursosComponent,
    ListaInfoComponent
  ],
  templateUrl: './curso-lista.html',
})
export class CursoLista {
  listaCursos: Curso[] = [
    {
      instructor: 'Rojas B. Everson E.',
      titulo: 'Ofrecemos cursos de actualización',
      descripcion: 'Ofrecemos cursos de actualización y especialización para potenciar su perfil profesional. Al finalizar y aprobar nuestras evaluaciones.',
      precio: 500.00
    },
    {
      instructor: 'Ing. Carlos Mendez',
      titulo: 'Seguridad Industrial Avanzada',
      descripcion: 'Domina las normativas vigentes y aprende a gestionar riesgos críticos en plantas industriales con estándares internacionales.',
      precio: 500.00
    },
    {
      instructor: 'Ing. Sofia Paredes',
      titulo: 'Lucha Contra Incendios',
      descripcion: 'Entrenamiento táctico y teórico para brigadas de emergencia. Uso de extintores, mangueras y protocolos de evacuación.',
      precio: 500.00
    },
    {
      instructor: 'Rojas B. Everson E.',
      titulo: 'Gestión de Riesgos',
      descripcion: 'Metodologías para la identificación, evaluación y control de riesgos laborales según la Ley 29783.',
      precio: 500.00
    }
  ];
}
