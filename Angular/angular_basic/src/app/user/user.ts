import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Person } from '../../interfaces/person';
import { UserService } from '../services/user-service';
import { Students } from '../students/students';

@Component({
  selector: 'app-user',
  imports: [FormsModule, Students],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  userName: string = 'John Doe';

  updateUserName() {
    this.userName = 'Jane Smith';
  }

  userList: Person[] = [];

  constructor(private userService:UserService) {
    this.userList = this.userService.getUsers();
  }


}

// Events
// Do some examples using button
// Signals
//ngIf example
//ngFor example
