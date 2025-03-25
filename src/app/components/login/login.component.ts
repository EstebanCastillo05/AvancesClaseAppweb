import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, MatInputModule, 
    MatFormFieldModule, MatButtonModule, 
    FormsModule, MatCardModule,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private validUser = { username: 'Esteban', password: '1234' };

  loginData = { username: '', password: '' };
  errorMessage: string = '';

  constructor(private router: Router) {}

  onLogin() {
    if (
      this.loginData.username == this.validUser.username 
      && this.loginData.password == this.validUser.password
    ) {
      this.router.navigate(['/dashboard']); 
    } else {
      this.errorMessage = 'Usuario o contraseña incorrectos';
    }
  }

  Registrarse() {
    this.router.navigate(['/register']);
  }
}
