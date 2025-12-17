import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// 1. Importamos el componente del botón
import { EncabezadoComponent } from './compartido/componentes/encabezado/encabezado';
import { PiePaginaComponent } from './compartido/componentes/pie-pagina/pie-pagina';
import { BotonWhatsappComponent } from './compartido/componentes/boton-whatsapp/boton-whatsapp';

@Component({
  selector: 'app-root',
  standalone: true,
  // 2. Lo agregamos al array de imports
  imports: [
    RouterOutlet, 
    EncabezadoComponent, 
    PiePaginaComponent, 
    BotonWhatsappComponent // <--- AQUÍ ESTÁ LA CLAVE
  ], 
  templateUrl: './app.html',
})
export class AppComponent {
  title = 'SAFETY-FRONTEND';
}