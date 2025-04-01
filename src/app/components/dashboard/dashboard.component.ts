import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card'; 

@Component({
  selector: 'app-dashboard',
  imports: [MatButtonModule, MatCardModule], 
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(private router: Router) {}

  UserList() {
    this.router.navigate(['/user-list']);
  }
}