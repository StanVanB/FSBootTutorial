import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Person } from '../../interfaces/person';
import { UserService } from '../services/user-service';

@Component({
  selector: 'app-student',
  imports: [RouterLink],
  templateUrl: './student.html',
  styleUrl: './student.css',
})
export class Student {
  studentList: Person[] = [];

  constructor(private userService: UserService) {
    this.studentList = this.userService.getUsers();
  }
}
