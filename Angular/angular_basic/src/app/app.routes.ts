import { Routes } from '@angular/router';
import { SignIn } from './sign-in/sign-in';
import { SignUp } from './sign-up/sign-up';
import { User } from './user/user';
import { Students } from './students/students';

export const routes: Routes = [
    {
        path: 'sign-in',
        component: SignIn
    }, 
    {
        path: 'sign-up',
        component: SignUp
    },
    {
        path: 'user',
        component: User
    },
    {
        path: 'student',
        component: Students
    }
    
];
