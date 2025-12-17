import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Curso } from '../../curso-lista';

@Component({
  selector: 'app-lista-info',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule, MatIconModule],
  templateUrl: './lista-info.html',
  styleUrl: './lista-info.css'
})
export class ListaInfoComponent {
  @Input() cursos: Curso[] = [];
}
