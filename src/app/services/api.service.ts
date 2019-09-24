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
    //  return new Promise((resolve, reject) => {
    //    let apiURL = `https://selfcare-service.demo.melita.com/interview/api/offers/100/subscriptions`;
    //    this.http.get(apiURL)
    //        .toPromise()
    //        .then(
    //            res => { // Success
    //              console.log(res);
    //              resolve(res);
    //            }
    //        ).catch((error) => {
    //      reject(error);
    //
    //      console.log("Promise rejected with " + JSON.stringify(error));
    //    });
    //  });
  }
}
