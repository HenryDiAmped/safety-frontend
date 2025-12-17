import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FormularioContactoComponent } from './componentes/formulario-contacto/formulario-contacto';
import { BannerPrincipalComponent } from '../../compartido/componentes/banner-principal/banner-principal';

@Component({
  selector: 'app-contacto-page',
  standalone: true,
  imports: [
    CommonModule, 
    MatIconModule, 
    FormularioContactoComponent,
    BannerPrincipalComponent
  ],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
})
export class ContactoPageComponent {}