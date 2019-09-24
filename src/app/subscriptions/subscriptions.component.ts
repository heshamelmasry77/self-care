import {Component, OnInit} from '@angular/core';
import {ApiService} from '../services/api.service';

@Component({
    selector: 'app-subscriptions',
    templateUrl: './subscriptions.component.html',
    styleUrls: ['./subscriptions.component.scss']
})
export class SubscriptionsComponent implements OnInit {
    subscriptions;

    constructor(private apiService: ApiService) {
    }

    ngOnInit() {
        this.getSubscriptions();
    }

    getSubscriptions() {
        this.apiService.getSubscriptions();
        return this.apiService.getSubscriptions().subscribe((data: { subscriptions: any }) => {
            console.log(data.subscriptions);
            this.subscriptions = data.subscriptions;
        })
    }
}
