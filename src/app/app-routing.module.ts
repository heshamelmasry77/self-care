import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';


const routes: Routes = [
  {path:'subscriptions', component: SubscriptionsComponent},
  { path: '', redirectTo: '/subscriptions', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
