import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { FirstClassComponent } from './components/first-class/first-class.component';   //FirstClassComponent
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserFormPrimeFlexComponent } from './components/user-form-prime-flex/user-form-prime-flex.component';
import { DisplayDataComponent } from './components/display-data/display-data.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserFormComponent, UserFormPrimeFlexComponent, DisplayDataComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'standalone-app';

  name: string = '';
  age: number | null = null;

  onUserSubmitted(userData: { name: string; age: number}) {
    this.name = userData.name;
    this.age = userData.age;
  }
}


