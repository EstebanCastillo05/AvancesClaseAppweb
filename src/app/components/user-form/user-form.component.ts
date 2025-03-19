import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { UserDTO } from '../../interfaces/userDTO';


@Component({
  selector: 'app-user-form',
  imports: [CommonModule, MatInputModule, MatFormFieldModule, MatButtonModule, FormsModule],
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  name: string = '';
  age: number | null = null;
  email: string = '';
  
  @Output() userSubmitted = new EventEmitter<UserDTO>();

  submitForm() {
    if (this.name && this.age !== null) {
      this.userSubmitted.emit({name: this.name, age: this.age });
      this.name = '';
      this.age = null;
    }
  }
}
