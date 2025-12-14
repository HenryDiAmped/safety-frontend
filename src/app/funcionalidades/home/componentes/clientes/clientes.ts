import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './clientes.html',
  styleUrl: './clientes.css',
})
export class ClientesComponent implements OnInit {
  @Input() titulo: string = 'Más de 4000 empresas usan Proyecto Safety para la formación';
  itemsOriginales: any[] = [
    { nombre: 'BAVARIA', logoUrl: '' },
    { nombre: 'CEMEX', logoUrl: '' },
    { nombre: 'CELSIA', logoUrl: '' },
    { nombre: 'COLGATE', logoUrl: '' },
    { nombre: 'BANCO AZTECA', logoUrl: '' },
    { nombre: 'SANTANDER', logoUrl: '' },
    { nombre: 'ACCENTURE', logoUrl: '' },
    { nombre: 'AT&T', logoUrl: '' },
  ];
  itemsDisplay: any[] = [];
  ngOnInit() {
    this.itemsDisplay = [...this.itemsOriginales, ...this.itemsOriginales, ...this.itemsOriginales];
  }
  solicitarAsesoria() {
    console.log('Navegando al formulario de asesoría...');
  }
}
