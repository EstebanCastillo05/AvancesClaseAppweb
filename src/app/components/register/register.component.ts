import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { UserDTO } from '../../interfaces/userDTO';


@Component({
    selector: 'app-register',
    standalone: true,
    imports: [CommonModule, MatInputModule, MatFormFieldModule, MatButtonModule, FormsModule, MatCardModule],
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
  })
  export class RegisterComponent {
  
      userObj: UserDTO = {
          name: '',
          lastName: '',
          age: 0,
          email: '',
          password: '',
          confirmPassword: '',
          lenguagues: []
      };
  
      passwordMismatch: boolean = false;
  
      @Output() userSubmitted = new EventEmitter<UserDTO>();
  
      // Método para validar si las contraseñas coinciden
      validatePassword() {
          this.passwordMismatch = this.userObj.password !== this.userObj.confirmPassword;
      }
  
      // Método para manejar el submit del formulario
      submitForm(userForm: any) {
          this.validatePassword();
  
          // Si las contraseñas no coinciden o el formulario es inválido, no enviar el formulario
          if (this.passwordMismatch || userForm.invalid) {
              return;
          }
  
          // Emite el objeto userObj si el formulario es válido
          if (this.userObj.name && this.userObj.lastName && this.userObj.email && this.userObj.password && this.userObj.confirmPassword) {
              this.userSubmitted.emit(this.userObj);
  
              // Limpia los campos del formulario después de enviarlo
              this.resetForm(userForm);
          }
      }
  
      // Restablece el formulario después del envío
      resetForm(userForm: any) {
          this.userObj = {
              name: '',
              lastName: '',
              age: 0,
              email: '',
              password: '',
              confirmPassword: '',
              lenguagues: []
          };
  
          this.passwordMismatch = false;
          
          // Resetea el formulario y su estado de validación
          userForm.resetForm();
      }
  }