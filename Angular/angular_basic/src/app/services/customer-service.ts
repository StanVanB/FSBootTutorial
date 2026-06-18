import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomerInfo } from '../interfaces/customer-info';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  
  private apiUrl = 'http://localhost:3000/';

  http = inject(HttpClient);

  getCustomers(): Observable<CustomerInfo[]> {
    return this.http.get<CustomerInfo[]>(`${this.apiUrl}customers`);
  }

  getCustomerById(id: number): Observable<CustomerInfo[]> {
    return this.http.get<CustomerInfo[]>(`${this.apiUrl}customers/${id}`);
  }

  // 2 mins to add the delete method/function
  deleteCustomerById(id: number): Observable<CustomerInfo[]> {
    return this.http.delete<CustomerInfo[]>(`${this.apiUrl}customers/${id}`);
  }

  addCustomer(customer: CustomerInfo): Observable<CustomerInfo> {
    return this.http.post<CustomerInfo>(`${this.apiUrl}customers`, customer);
  }

  updateCustomer(id: number, customer: CustomerInfo): Observable<CustomerInfo> {
    return this.http.put<CustomerInfo>(`${this.apiUrl}customers/${id}`, customer);
  }

}
