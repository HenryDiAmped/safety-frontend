import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiciosComponent } from './componentes/servicios/servicios';
import { BeneficiosComponent } from './componentes/beneficios/beneficios';
import { ClientesComponent } from './componentes/clientes/clientes';
import { BannerPrincipalComponent } from '../../compartido/componentes/banner-principal/banner-principal';
import { ContactoComponent } from './componentes/contacto/contacto';
import { RouterModule } from '@angular/router';

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
    RouterModule,
  ],
  templateUrl: './inicio.html',
})
export class InicioComponent {
[x: string]: any;
item = {
    fragment: 'contacto' 
  };
}
