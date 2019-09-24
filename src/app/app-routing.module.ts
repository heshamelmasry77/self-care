import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { OffersComponent } from './offers/offers.component';


const routes: Routes = [
  {path:'offers', component: OffersComponent},
  { path: '', redirectTo: '/offers', pathMatch: 'full' },
  { path: 'subscriptions/:id',      component: SubscriptionsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
