import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/userDTO';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  imports: [MatTableModule],
  standalone: true,
  styleUrl: './user-list.component.css'
})
export class UserListComponent {

  displayedColumns: string[] = ['id', 'username', 'names', 'lastnames', 'age', 'gender', 'email'];
  dataSource: User[] = [];

  constructor(private userService: UserService, private router: Router ) {}

  ngOnInit(): void {
    this.userService.getAll().subscribe(users => {
      this.dataSource = users;

    }, error => {
      console.error('Error al obtener usuarios:', error);
    });
  }
}