import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  imports: [FormsModule],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  userName: string = 'John Doe';


  updateUserName(){
    this.userName = 'Jane Smith';
  }

}

// Events
// Do some examples using button
// Signals
//ngIf example
//ngFor example
