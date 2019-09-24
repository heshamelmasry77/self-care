import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  public getOffers() {
    return this.http.get(`https://selfcare-service.demo.melita.com/interview/api/offers`);
  }

  public getSubscriptions() {
    return this.http.get(`https://selfcare-service.demo.melita.com/interview/api/offers/100/subscriptions`);
  }
}
