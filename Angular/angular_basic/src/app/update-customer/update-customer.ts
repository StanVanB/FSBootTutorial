import { Component, OnInit, ChangeDetectorRef, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../services/customer-service';
import { CustomerInfo } from '../interfaces/customer-info';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-customer',
  imports: [FormsModule],
  templateUrl: './update-customer.html',
  styleUrl: './update-customer.css',
})
export class UpdateCustomer {

  route = inject(ActivatedRoute);
  router = inject(Router);
  customerService = inject(CustomerService);
  cdr = inject(ChangeDetectorRef);
  customer: CustomerInfo = {
    customer_id: 0,
    customer_name: '',
    customer_email: '',
    age:0
  };
  customerId!: number;

  ngOnInit() {
    this.customerId = parseInt(this.route.snapshot.params['id']);
    if (this.customerId) {
       this.customerService.getCustomerById(this.customerId).subscribe((data: CustomerInfo[]) => {
        this.customer = data[0];
        console.log(this.customer);
        this.cdr.detectChanges();
      });
    }
  }

  updateCustomer(customer: CustomerInfo) {
    this.customerService.updateCustomer(this.customerId, customer).subscribe((data: any) => {
      this.router.navigate(['/customers']);
    });
  }
}

//on success of update redirect to customers page and show the updated list of customers.