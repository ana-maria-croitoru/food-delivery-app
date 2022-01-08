import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './shared/card/card.component';
import { RestaurantsComponent } from './features/restaurants/restaurants.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MealsComponent } from './features/meals/meals.component';
import { RestaurantDetailsPageComponent } from './pages/restaurant-details-page/restaurant-details-page.component';
import { NavigationBarComponent } from './features/navigation-bar/navigation-bar.component';

@NgModule({
  declarations: [AppComponent, CardComponent, RestaurantsComponent, HomePageComponent, MealsComponent, RestaurantDetailsPageComponent, NavigationBarComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
