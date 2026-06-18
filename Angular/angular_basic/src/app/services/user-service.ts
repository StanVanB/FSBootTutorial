import { Injectable } from '@angular/core';
import { Person } from '../../interfaces/person';

@Injectable({
  providedIn: 'root',
})
export class UserService {

    userList: Person[] = [
      {id: 1,name: 'Harsh', age: 25, city: 'New York'},
      {id: 2, name: 'Alice', age: 30, city: 'Los Angeles'},
      {id: 3, name: 'Bob', age: 28, city: 'Chicago'},
      {id: 4, name: 'Eva', age: 22, city: 'San Francisco'},
    ];

    getUsers(): Person[] {
        return this.userList;
    }

    getUserById(id:number):Person | undefined {
        return this.userList.find(user => user.id === id);
    }

}
