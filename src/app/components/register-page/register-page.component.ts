import { Component } from '@angular/core';
import { RegisterComponent } from '../register/register.component';
import { CommonModule } from '@angular/common';
import { UserDTO } from '../../interfaces/userDTO';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register-page',
  imports: [RegisterComponent,CommonModule ],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})


export class RegisterPageComponent {

  constructor(private router: Router) { }

  user: UserDTO = {
    name: '',
    lastName: '',
    age: 0,
    email: '',
    password: '', 
    confirmPassword: '',  
    lenguagues: []
  };
  
    onUserSubmitted(userData: UserDTO) {
      this.user = userData; 
      console.log(this.user);
      this.router.navigate(['/login']).then(success => {
        if (success) {
          console.log('navigation success');
        } else {
          console.log('navigation failed');
        }
      });
    }
  }
