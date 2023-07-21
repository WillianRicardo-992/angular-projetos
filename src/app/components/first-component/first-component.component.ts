import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {
  name: string = "Willian"
  age: number = 30
  height: number = 1.86
  job = "Programador"
  hobbies =["Jogar", "Estudar", "Correr"]
  car = {
    name: "Bugatti",
    year: 2018,
    doors: 2,
    power: 320

  }
}
