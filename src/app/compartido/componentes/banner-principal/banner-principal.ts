import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-banner-principal',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './banner-principal.html',
  styleUrl: './banner-principal.css',
})
export class BannerPrincipalComponent {
  @Input() titulo: string = '';
  @Input() subtitulo: string = '';
  @Input() textoAmarillo: string = '';
  @Input() descripcion: string = '';
  @Input() imagenFondo: string = '';
  @Input() mostrarFlecha: boolean = false;

  @Input() centrarContenido: boolean = false;

  scrollToContent() {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  }
}
