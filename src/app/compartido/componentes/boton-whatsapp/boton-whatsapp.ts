import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-boton-whatsapp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './boton-whatsapp.html',
  styleUrls: ['./boton-whatsapp.css']
})
export class BotonWhatsappComponent { 
  @Input() telefono: string = '51992860851'; 
  @Input() mensaje: string = 'Hola, quisiera más información sobre el proyecto.';
  get whatsappLink(): string {
    return `https://wa.me/${this.telefono}?text=${encodeURIComponent(this.mensaje)}`;
  }
}