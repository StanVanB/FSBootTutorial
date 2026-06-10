import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-sign-in',
  imports: [FormsModule, JsonPipe],
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.css',
})
export class SignIn {

  customer = {
    email: '',
    password: ''
  };

  signIn(formValue:any): void {
    if(formValue.valid) {
      console.log('Form Submitted!', this.customer);
    } else {
      console.log('Form is invalid');
    }
  }

}
