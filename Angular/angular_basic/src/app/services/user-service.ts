import { Injectable } from '@angular/core';
import { Person } from '../../interfaces/person';

@Injectable({
  providedIn: 'root',
})
export class UserService {

    userList: Person[] = [
      {name: 'Harsh', age: 25, city: 'New York'},
      {name: 'Alice', age: 30, city: 'Los Angeles'},
      {name: 'Bob', age: 28, city: 'Chicago'},
      {name: 'Eva', age: 22, city: 'San Francisco'},
    ];

    getUsers(): Person[] {
        return this.userList;
    }

}
