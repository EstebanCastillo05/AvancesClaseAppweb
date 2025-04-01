import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';  
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../../interfaces/userDTO';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [CommonModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatCardModule, FormsModule], 
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  @Output() userSubmitted = new EventEmitter<User>();

  userObj: User = {
      id: 0,
      username: '',
      names: '',
      lastnames: '',
      age: 0,
      email: '',
      gender: '',
      password: ''
  };

  confirmPassword: string = '';
  passwordMismatch: boolean = false;

  validatePassword() {
      this.passwordMismatch = this.userObj.password !== this.confirmPassword;
  }

  submitForm(userForm: NgForm) {
      this.validatePassword();

      if (this.passwordMismatch || userForm.invalid) {
          return;
      }

      this.userSubmitted.emit(this.userObj);
      this.resetForm(userForm);
  }

  resetForm(userForm: NgForm) {
      this.userObj = {
          username: '',
          names: '',
          lastnames: '',
          age: 0,
          email: '',
          gender: '',
          password: ''
      };
      this.confirmPassword = '';
      this.passwordMismatch = false;
      userForm.resetForm();
  }
}
