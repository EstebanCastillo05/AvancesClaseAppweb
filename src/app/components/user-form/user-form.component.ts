import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { UserDTO } from '../../interfaces/userDTO';
import { NgForm } from '@angular/forms';  

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [CommonModule, MatInputModule, MatFormFieldModule, MatButtonModule, FormsModule],
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  @Output() userSubmitted = new EventEmitter<UserDTO>();

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
  // Valida si las contraseñas sean iguales
  validatePassword() {
      this.passwordMismatch = this.userObj.password !== this.userObj.confirmPassword;
  }

  submitForm(userForm: NgForm) {
      this.validatePassword(); 

      if (this.passwordMismatch) {
          return;
      }

      if (this.userObj.name && this.userObj.lastName && this.userObj.age && this.userObj.email && this.userObj.password && this.userObj.confirmPassword) {
        this.userSubmitted.emit(this.userObj);
        this.resetForm(userForm);
    }
  }

  // Restablece el formulario después del envío 
  resetForm(userForm: NgForm) {
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
    // Resetea el formulario
    userForm.resetForm();
  }
}