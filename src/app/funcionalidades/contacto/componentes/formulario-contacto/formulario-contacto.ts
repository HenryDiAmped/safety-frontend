import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import emailjs from '@emailjs/browser';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-formulario-contacto',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './formulario-contacto.html',
  styleUrl: './formulario-contacto.css',
})
export class FormularioContactoComponent {
  contactoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactoForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.pattern(/^\d{9,}$/)]],
      mensaje: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  onSubmit() {
    if (this.contactoForm.valid) {
      const templateParams = {
        nombre_cliente: this.contactoForm.value.nombre,
        email_cliente: this.contactoForm.value.email,
        telefono_cliente: this.contactoForm.value.telefono,
        mensaje_cliente: this.contactoForm.value.mensaje,
        fecha_envio: new Date().toLocaleString(),
      };

      // Usa las credenciales desde los environment (no hardcodear)
      emailjs
        .send(
          environment.emailjs.serviceId,
          environment.emailjs.templateId,
          templateParams,
          environment.emailjs.publicKey
        )
        .then((response) => {
          console.log('ÉXITO!', response.status, response.text);
          this.contactoForm.reset();
        })
        .catch((err) => {
          console.error('ERROR AL ENVIAR:', err);
        });
    } else {
      console.log('Formulario inválido');
    }
  }
}
