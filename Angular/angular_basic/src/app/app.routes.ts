import { Routes } from '@angular/router';
import { SignIn } from './sign-in/sign-in';
import { SignUp } from './sign-up/sign-up';
import { User } from './user/user';
import { Students } from './students/students';
import { Home } from './home/home';
import { Customers } from './customers/customers';
import { CustomerDetails } from './customer-details/customer-details';
import { AddCustomers } from './add-customers/add-customers';
import { UpdateCustomer } from './update-customer/update-customer';

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
        path: 'user/:id',
        component: User
    },
    {
        path: 'students',
        component: Students
    },
    {
        path: 'home',
        component: Home
    },
    {
        path: 'customers',
        component: Customers
    },
    {
        path: 'customers/:id',
        component: CustomerDetails
    },
    {
        path: 'add-customer',
        component: AddCustomers
    },
    {
        path: 'edit-customer/:id',
        component: UpdateCustomer
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '**',
        //Another way to add component is by using loadComponent(this is used for lazy loading)
        loadComponent: () => import('./pagenotfound/pagenotfound').then(m => m.Pagenotfound)
    },

    // 3 mins
    // if i add 'home' in the url
    // it should redirect to home component.
    
];
