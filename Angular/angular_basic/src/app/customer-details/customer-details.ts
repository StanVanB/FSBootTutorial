import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../services/customer-service';
import { CustomerInfo } from '../interfaces/customer-info';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-customer-details',
  imports: [AsyncPipe],
  templateUrl: './customer-details.html',
  styleUrl: './customer-details.css',
})
export class CustomerDetails {
  //use that id to call the getCustomerById method in the customer service - you can use customer.ts to find it.
  route = inject(ActivatedRoute);
  customerService = inject(CustomerService);
  customerId!: number;
  customers$!: Observable<CustomerInfo[]>;

  constructor() {
    this.customerId = parseInt(this.route.snapshot.params['id']);
    if (this.customerId) {
      this.customers$ = this.customerService.getCustomerById(this.customerId);
    }
  }

}
