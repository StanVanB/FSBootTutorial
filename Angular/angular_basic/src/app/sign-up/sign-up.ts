import { Component,inject } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { CustomPasswordValidation } from '../custom-password-validation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.css',
})
export class SignUp {

  router = inject(Router);

  signUpForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), CustomPasswordValidation]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
  })

  redirectToSignin(){
    this.router.navigate(['/sign-in']);
  }

}
