import { Component } from '@angular/core';
import { HistoriaComponent } from './componentes/historia/historia';
import { MisionVisionComponent } from './componentes/mision-vision/mision-vision';
import { ValoresComponent } from './componentes/valores/valores';
import { EquipoComponent } from './componentes/equipo/equipo';
import { BannerPrincipalComponent } from '../../compartido/componentes/banner-principal/banner-principal';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [
    HistoriaComponent,
    MisionVisionComponent,
    ValoresComponent,
    EquipoComponent,
    BannerPrincipalComponent,
  ],
  templateUrl: './nosotros.html',
  styleUrls: ['./nosotros.css']
})
export class NosotrosComponent {}