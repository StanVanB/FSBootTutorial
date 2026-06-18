import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Person } from '../../interfaces/person';
import { UserService } from '../services/user-service';
import { Students } from '../students/students';
import { ActivatedRoute } from '@angular/router';
import { UserDetails } from '../user-details/user-details';

@Component({
  selector: 'app-user',
  imports: [FormsModule, Students, UserDetails],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  userName: string = 'John Doe';

  updateUserName() {
    this.userName = 'Jane Smith';
  }

  userList: Person[] = [];

  ngOnInit() {
    console.log('Hello 222');
    // console.log('Approach 1 ', this.route.snapshot.paramMap.get('id')); // Example of using ActivatedRoute to get route parameters
    // console.log('Approach 2 ', this.route.snapshot.params['id']); // Another way to get route parameters
    const customerId = this.route.snapshot.params['id'];
    if (customerId) {
      const user = this.userService.getUserById(parseInt(customerId));
      console.log('User with ID', customerId, ':', user);
      this.userList = user ? [user] : [];
    }

  }

  constructor(private userService: UserService) {
    console.log('Hello 111');
    this.userList = this.userService.getUsers();
  }

  // Another way to inject a Service
  route = inject(ActivatedRoute);

  onUserNameChange(newName: string) {
    console.log('Received userNameChange event with value inside Parent:', newName);
    this.userName = newName;
  }


}

//active class
//routing using navigate
// by passing ids
// Signals
