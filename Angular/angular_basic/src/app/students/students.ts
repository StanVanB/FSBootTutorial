import { Component } from '@angular/core';
import { UserService } from '../services/user-service';
import { Person } from '../../interfaces/person';

@Component({
  selector: 'app-students',
  imports: [],
  templateUrl: './students.html',
  styleUrl: './students.css',
})
export class Students {


  studentList: Person[] = [];

  constructor(private userService:UserService) {
    this.studentList = this.userService.getUsers();
  }
}
