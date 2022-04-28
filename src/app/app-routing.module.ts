import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantsComponent } from './features/restaurants/restaurants.component';
import { OwnerRestaurantsComponent } from './features/owner-restaurants/owner-restaurants.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RestaurantDetailsPageComponent } from './pages/restaurant-details-page/restaurant-details-page.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { OrdersPageComponent } from './pages/orders-page/orders-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'homepage', component: HomePageComponent },
  { path: 'orderspage', component: OrdersPageComponent },
  { path: 'owner-restaurants', component: OwnerRestaurantsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signUp', component: SignupComponent },
  {
    path: 'homepage',
    children: [
      { path: '', component: RestaurantsComponent },
      {
        path: ':id',
        component: RestaurantDetailsPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
