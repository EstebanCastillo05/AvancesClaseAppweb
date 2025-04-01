import { Component } from '@angular/core';
import { RegisterComponent } from '../register/register.component';
import { CommonModule } from '@angular/common';
import { User } from '../../interfaces/userDTO';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';  

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [RegisterComponent, CommonModule],
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {

  constructor(private router: Router, private userService: UserService) { }

  user: User = {
    username: '',
    names: '',
    lastnames: '',
    age: 0,
    email: '',
    gender: '',
    password: ''
  };

  // Esta funcion solo se activa al enviar el formulario
  onUserSubmitted(userData: User) {
    this.user = { ...userData };  
    console.log("Usuario registrado:", this.user);
    this.userService.create(this.user).subscribe(     // Llamada al servicio para enviar los datos al backend
      (response) => {
        console.log('Usuario creado correctamente:', response);
        this.router.navigate(['/login']).then(success => {
          if (success) {
            console.log('Navegación exitosa al login');
          } else {
            console.error('Error en la navegación');
          }
        });
      },
      (error) => {
        console.error('Error al crear el usuario:', error);
      }
    );
  }
}
