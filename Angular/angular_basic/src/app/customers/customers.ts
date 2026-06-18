import { Component, inject } from '@angular/core';
import { CustomerInfo } from '../interfaces/customer-info';
import { CustomerService } from '../services/customer-service';
import { Observable, Subject, startWith, switchMap } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-customers',
  imports: [AsyncPipe, RouterLink],
  templateUrl: './customers.html',
  styleUrl: './customers.css',
})
export class Customers {
  private readonly refreshCustomers$ = new Subject<void>();
  customers$: Observable<CustomerInfo[]> = this.refreshCustomers$.pipe(
    startWith(void 0),
    switchMap(() => this.customerService.getCustomers())
  );
  customerService = inject(CustomerService);

  constructor() {
    // this.customerService.getCustomers().subscribe((data) => {
    //   this.customers = data;
    //   console.log(this.customers);
    // });

    //Another way of getting the data
    // Using subscribe with next and error handlers

    // this.customerService.getCustomers().subscribe({
    //   next: (data) => {
    //     this.customers = data;
    //     console.log(this.customers);
    //   },
    //   error: (error) => {
    //     console.log(error);
    //   },
    // });

  }
  
  deleteCustomer(id: number | undefined) {
    if(id){
      this.customerService.deleteCustomerById(id).subscribe({
        next: (data) => {
          // Refresh the customers list after deletion
          console.log(data);
          this.refreshCustomers$.next();
        },
        error: (error) => {
          console.log(error);
        },
      });
    }
  }
}
