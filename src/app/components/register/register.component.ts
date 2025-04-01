import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../../interfaces/userDTO';;
import {MatSelectModule} from '@angular/material/select';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatCardModule, FormsModule, MatSelectModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent {
    @Output() userSubmitted = new EventEmitter<User>();
  
    userCreate: User = {
      username: '',
      names: '',
      lastnames: '',
      age: 0,
      email: '',
      gender: '',
      password: '',
    };
  
    confirmPassword: string = '';  
    passwordMismatch: boolean = false;
  
    ngOnInit() {
      this.confirmPassword = '';  
    }
  
    validatePassword() {
      this.passwordMismatch = this.userCreate.password !== this.confirmPassword;
    }
  
    submitForm(userForm: any) {
      console.log(this.userCreate);  // para revisar que los datos coincidan
      if (userForm.invalid) {
          return;
      }
  
      if (this.userCreate.username && this.userCreate.names && this.userCreate.lastnames && this.userCreate.age && this.userCreate.email && this.userCreate.gender && this.userCreate.password) {
          this.userSubmitted.emit(this.userCreate);
          this.resetForm(userForm);
      }
    }
    
    resetForm(userForm: NgForm) {
      this.userCreate = {
        username: '',
        names: '',
        lastnames: '',
        age: 0,
        email: '',
        gender: '',
        password: ''
      };
      userForm.resetForm();
    }
  }