import { Component, inject } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { Router } from '@angular/router';

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

  // constructor(private router: Router) {}
  router = inject(Router);

  signIn(formValue:any): void {
    if(formValue.valid) {
      console.log('Form Submitted!', this.customer);
    } else {
      console.log('Form is invalid');
    }
  }

  redirectToSignup(): void {
    this.router.navigate(['/sign-up']);
  }

}
