import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BannerPrincipalComponent } from '../../compartido/componentes/banner-principal/banner-principal';

@Component({
  selector: 'app-servicios-vista',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, BannerPrincipalComponent],
  templateUrl: './servicios-vista.html',
  styleUrls: ['./servicios-vista.css'],
})
export class ServiciosVistaComponent {}
