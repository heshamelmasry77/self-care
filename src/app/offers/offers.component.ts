import {Component, OnInit} from '@angular/core';
import {ApiService} from '../services/api.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {
  offers;

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.getOffers();
  }

  getOffers() {
    this.apiService.getOffers();
    return this.apiService.getOffers().subscribe((data: { offers: any }) => {
      this.offers = data.offers;
    })
  }
}
