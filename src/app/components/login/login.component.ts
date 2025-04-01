import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { UserService } from '../../services/user.service';  
import { Login } from '../../interfaces/userDTO';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, MatInputModule, MatFormFieldModule, MatButtonModule, FormsModule, MatCardModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userData: Login = {
    username: '',
    password: ''
  };

  errorMessage: string = '';

  constructor(private router: Router, private userService: UserService) {}
  login() {
    this.userService.login(this.userData).subscribe({
      next: (data) => {
        if (data) { 
          console.log('Login exitoso', data);
          this.router.navigate(['/dashboard']);
        } else {
          this.errorMessage = 'Usuario o contraseña incorrectos';
        }
      },
      error: () => {
        this.errorMessage = 'Usuario o contraseña incorrectos';
      }
    });
  }

  Registrarse() {
    this.router.navigate(['/register']);
  }
}
