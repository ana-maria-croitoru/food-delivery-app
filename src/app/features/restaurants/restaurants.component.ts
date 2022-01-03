import { Component, OnInit, OnDestroy } from '@angular/core';
import { RestaurantService } from 'src/app/core/services/restaurant.service';
import { Restaurant } from 'src/app/core/interfaces/restaurant';
import { Subscription } from 'rxjs';

@Component({
  selector: 'restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss'],
})
export class RestaurantsComponent implements OnInit, OnDestroy {
  restaurants: Restaurant[] = [];
  restaurantsSubscription: Subscription;
  constructor(private restaurantService: RestaurantService) {}

  getRestaurants(): void {
    this.restaurantsSubscription = this.restaurantService
      .getRestaurants()
      .subscribe((restaurants) => {
        this.restaurants = restaurants;
      });
  }

  ngOnInit(): void {
    this.getRestaurants();
  }

  ngOnDestroy(): void {
    this.restaurantsSubscription.unsubscribe();
  }
}
