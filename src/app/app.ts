import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { EncabezadoComponent } from './compartido/componentes/encabezado/encabezado';
import { PiePaginaComponent } from './compartido/componentes/pie-pagina/pie-pagina';

@Component({
  selector: 'app-root',
  standalone: true,

  imports: [RouterOutlet, EncabezadoComponent, PiePaginaComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class AppComponent {
  title = 'SAFETY-FRONTEND';
}
