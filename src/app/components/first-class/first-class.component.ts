import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-first-class',
  imports: [MatButtonModule],
  standalone: true,
  templateUrl: './first-class.component.html',
  styleUrls: ['./first-class.component.css']
})
export class FirstClassComponent {
  
  name: string = 'Esteban Jose Adrian Castillo Molina 202300862'

  constructor() { }

  helloWord(): string {
    return 'Hello Word!';
  }

  changeName(): void{
    this.name = 'Esteban'
  }

}


