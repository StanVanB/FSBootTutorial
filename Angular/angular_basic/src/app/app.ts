import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Person } from '../interfaces/person';
import {CommonModule} from '@angular/common';
import { UserService } from './services/user-service';
import { Navbar } from './navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Angular Basic');

  constructor(private userService: UserService) {
    this.personList = this.userService.getUsers();
  }

  imageUrl: string = 'https://www.w3schools.com/bootstrap4/img_avatar3.png';

  name:string = 'Harsh';

  person: Person = {
    name: 'Harsh',
    age: 25,
    city: 'New York'
  }

  personList: Person[] = [];

  isDisabled: boolean = false;

  bgColor:string = 'beige';
  styleString: string = 'color: white; background-color: lightblue; font-size: 20px;';

  bgGreenClass = 'bg-green';
  bgYellowClass = 'bg-yellow';

  cost = 150;
  date = Date.now();

  showMessage(): void {
    console.log('Button Clicked!');
  }

  //create a new student components unless you already did - Done
  //consume the user service in the student component and display the list of users in the student component template using @for directive
  // include the students component as a child user User component - In Progress

}