import { Component, signal } from '@angular/core';
import { UserService } from '../services/user-service';
import { Person } from '../../interfaces/person';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-students',
  imports: [RouterLink],
  templateUrl: './students.html',
  styleUrl: './students.css',
})
export class Students {


  studentCount = signal(0);

  studentList: Person[] = [];

  constructor(private userService:UserService) {
    this.studentList = this.userService.getUsers();
    this.studentCount.set(this.studentList.length);
  }
}
