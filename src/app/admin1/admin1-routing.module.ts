import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillingComponent } from './billing/billing.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {
    path:'', component:CartComponent
  },
  {
    path:'billing', component:BillingComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Admin1RoutingModule { }
