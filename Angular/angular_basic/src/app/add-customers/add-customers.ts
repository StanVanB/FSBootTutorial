import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomerInfo } from '../interfaces/customer-info';
import { CustomerService } from '../services/customer-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-customers',
  imports: [FormsModule],
  templateUrl: './add-customers.html',
  styleUrl: './add-customers.css',
})
export class AddCustomers {

  customerService = inject(CustomerService);
  router = inject(Router);
  
  customer: CustomerInfo = {
    customer_name: '',
    customer_email: '',
    age: 0,
  };

  addCustomer(customerForm: CustomerInfo) {
    this.customerService.addCustomer(customerForm).subscribe({
      next: (data) => {
        console.log('Customer added successfully:', data);
        this.router.navigate(['/customers']);

      },
      error: (error) => {
        console.error('Error adding customer:', error);
      },
    });
  }

}
