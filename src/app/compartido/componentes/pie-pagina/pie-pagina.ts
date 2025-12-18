import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-pie-pagina',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, RouterModule],
  templateUrl: './pie-pagina.html',
  styleUrl: './pie-pagina.css',
})
export class PiePaginaComponent {
  currentYear = new Date().getFullYear();
  socialLinks = [
    { icon: 'facebook', label: 'Facebook', url: '#' },
    { icon: 'chat', label: 'WhatsApp', url: '#' },
    { icon: 'camera_alt', label: 'Instagram', url: '#' },
    { icon: 'business', label: 'LinkedIn', url: '#' },
  ];
  companyLinks = [
    { label: 'Nosotros', route: '/nosotros' },
    { label: 'Servicios', route: '/servicios' },
    { label: 'Cursos', route: '/cursos' },
    { label: 'Contacto', route: '/contacto' }
  ];
  contactInfo = {
    address: 'Av. Defensores del Morro, Chorrillos',
    phone: '+51 1 234 5678',
    email: 'contacto@safetyfire.pe',
  };
}
