import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiciosComponent } from './componentes/servicios/servicios';
import { BeneficiosComponent } from './componentes/beneficios/beneficios';
import { ClientesComponent } from './componentes/clientes/clientes';
import { BannerPrincipalComponent } from '../../compartido/componentes/banner-principal/banner-principal';
import { ContactoComponent } from './componentes/contacto/contacto';


@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    CommonModule,
    ServiciosComponent,
    BeneficiosComponent,
    ClientesComponent,
    BannerPrincipalComponent,
    ContactoComponent,

  ],
  templateUrl: './inicio.html',
})
export class InicioComponent {}
