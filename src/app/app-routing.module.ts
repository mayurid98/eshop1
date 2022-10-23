import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { PermissionComponent } from './admin/permission/permission.component';
import { UserAddComponent } from './admin/user-add/user-add.component';
import { CartComponent } from './admin1/cart/cart.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { MensComponent } from './mens/mens.component';
import { RxjsExampleComponent } from './rxjs-example/rxjs-example.component';
import { RxjsSubjectComponent } from './rxjs-subject/rxjs-subject.component';
import { ShopcategaryComponent } from './shopcategary/shopcategary.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';

const routes: Routes = [
  {
    path:'rxjs', component:RxjsExampleComponent
  },
  {
    path:'rxjs-subject' , component:RxjsSubjectComponent
  },
  {
    path:'admin1', 
    loadChildren:() =>import('./admin1/admin1.module').
    then(el=>el.Admin1Module)
  },
  {
    path:'cart', component:CartComponent
  },
  {
    path:'dashboard', component: DashboardComponent
  },
  
  {path :'Loginpage' , component : LoginpageComponent,
 
  },
  { path :'welcomepage' , component : WelcomepageComponent,
   children:
   [{
    path:'mens', component:MensComponent,
    // children:
    //  [{
    //     path: 'shopcategary', component: ShopcategaryComponent
    //  }] 
    }]
   },
   {
    path: 'shopcategary', component: ShopcategaryComponent
 },
  {path: 'homepage' , component: HomePageComponent},
  {path : '' , redirectTo : '/homepage', pathMatch :'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
