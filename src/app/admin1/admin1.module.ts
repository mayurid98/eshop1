import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Admin1RoutingModule } from './admin1-routing.module';
import { BillingComponent } from './billing/billing.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    BillingComponent,
    CheckoutComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    Admin1RoutingModule
  ]
})
export class Admin1Module { }
