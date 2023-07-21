import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'Marcos';

  userData = {
    email: 'marcos@email.com',
    role: 'Admin',
    age: 27
  }
  title = 'Projeto-em-Angular';
}
