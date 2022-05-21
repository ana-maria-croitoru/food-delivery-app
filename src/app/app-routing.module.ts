import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantsComponent } from './features/restaurants/restaurants.component';
import { OwnerRestaurantsComponent } from './features/owner-restaurants/owner-restaurants.component';
import { OwnerMealsComponent } from './features/owner-meals/owner-meals.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RestaurantDetailsPageComponent } from './pages/restaurant-details-page/restaurant-details-page.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { OrdersPageComponent } from './pages/orders-page/orders-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'homepage', component: HomePageComponent },
  { path: 'orderspage', component: OrdersPageComponent },
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
  {
    path: 'owner-restaurants',
    children: [
      { path: '', component: OwnerRestaurantsComponent },
      {
        path: ':id',
        component: OwnerMealsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
