import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Person } from '../../interfaces/person';

@Component({
  selector: 'app-user-details',
  imports: [],
  templateUrl: './user-details.html',
  styleUrl: './user-details.css',
})
export class UserDetails {
  @Input() childUserName: string = '';
  @Input() childUserList: Person[] = [];
  @Output() userNameChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() { 
    this.childUserName = 'Default User Name';
  }

  ngOnInit() {
    this.childUserName = 'Default User Name';
  }

  sendUserName(value: string) {
    if (value) {
      console.log('Emitting userNameChange event with value:', value);
      this.userNameChange.emit(value);
    }
  }
}
