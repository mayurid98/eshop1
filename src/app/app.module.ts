import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component';
import { CustomhilighterDirective } from './customhilighter.directive';
import { ShopcategaryComponent } from './shopcategary/shopcategary.component';
import { MensComponent } from './mens/mens.component';
import { GirlsComponent } from './girls/girls.component';
import { AdminModule } from './admin/admin.module';
import { Admin1Module } from './admin1/admin1.module';
import { RxjsExampleComponent } from './rxjs-example/rxjs-example.component';
import { RxjsSubjectComponent } from './rxjs-subject/rxjs-subject.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    WelcomepageComponent,
    HomePageComponent,
    CustomhilighterDirective,
    ShopcategaryComponent,
    MensComponent,
    GirlsComponent,
    RxjsExampleComponent,
    RxjsSubjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    AdminModule,
    Admin1Module
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class AppModule { }
