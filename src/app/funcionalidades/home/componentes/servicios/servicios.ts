import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
interface Servicio {
  titulo: string;
  descripcion: string;
  icono: string;
  fragment: string;
}
@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, RouterModule],
  templateUrl: './servicios.html',
  styleUrls: ['./servicios.css'],
})
export class ServiciosComponent {
  listaServicios: Servicio[] = [
    {
      titulo: 'Sistemas Contra Incendio',
      icono: 'local_fire_department',
      descripcion:
        'Instalación, inspección y mantenimiento de rociadores, alarmas y extintores conforme a estándares de INDECI y normativa vigente.',
      fragment: 'incendios',
    },
    {
      titulo: 'Consultoría SST',
      icono: 'health_and_safety',
      descripcion:
        'Gestión de riesgos, formación de brigadas y programas a medida para asegurar el cumplimiento normativo de su empresa.',
      fragment: 'sst',
    },
    {
      titulo: 'Certificación Profesional',
      icono: 'workspace_premium',
      descripcion:
        'Cursos de especialización con certificados digitales y tecnología QR para verificación inmediata de competencias.',
      fragment: 'cursos',
    },
  ];
}
