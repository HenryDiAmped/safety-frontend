import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-banner-principal',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './banner-principal.html',
  styleUrl: './banner-principal.css',
})
export class BannerPrincipalComponent {}
