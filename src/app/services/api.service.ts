import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SubscriptionsComponent} from "../subscriptions/subscriptions.component";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  getOffers() {
    return this.http.get(`https://selfcare-service.demo.melita.com/interview/api/offers`);
  }

  getSubscriptionsById(id) {
    return this.http.get(`https://selfcare-service.demo.melita.com/interview/api/offers/${id}/subscriptions`);
  }
}
