import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-pie-pagina',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
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
  companyLinks = ['Nosotros', 'Servicios', 'Cursos', 'Contacto'];
  contactInfo = {
    address: 'Av. Defensores del Morro, Chorrillos',
    phone: '+51 1 234 5678',
    email: 'contacto@safetyfire.pe',
  };
}
