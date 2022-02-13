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
import { NavButtonComponent } from './shared/buttons/nav-button/nav-button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './pages/signup/signup.component';
import { SquareButtonComponent } from './shared/buttons/square-button/square-button.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    RestaurantsComponent,
    HomePageComponent,
    MealsComponent,
    RestaurantDetailsPageComponent,
    NavigationBarComponent,
    NavButtonComponent,
    LoginComponent,
    SignupComponent,
    SquareButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
