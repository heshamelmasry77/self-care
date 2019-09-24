import {Component, OnInit} from '@angular/core';
import {ApiService} from '../services/api.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.scss']
})
export class SubscriptionsComponent implements OnInit {
  subscriptions;
  offerId;

  constructor(private apiService: ApiService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.offerId = this.route.snapshot.paramMap.get("id");
    this.getOfferSubscriptions(this.offerId);
  }

  getOfferSubscriptions(id) {
    this.apiService.getSubscriptionsById(id);
    return this.apiService.getSubscriptionsById(id).subscribe((data: { subscriptions: any }) => {
      this.subscriptions = data.subscriptions;
    })
  }
}
