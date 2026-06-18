import { Component, signal } from '@angular/core';
import { Person } from '../../interfaces/person';
import { UserService } from '../../app/services/user-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
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

}
