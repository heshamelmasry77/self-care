import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  getOffers() {
    return this.http.get(`https://selfcare-service.demo.melita.com/interview/api/offers`);
  }

  getSubscriptions() {
    return this.http.get(`https://selfcare-service.demo.melita.com/interview/api/offers/100/subscriptions`);
  }
}
