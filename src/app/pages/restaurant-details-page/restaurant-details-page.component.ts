import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Restaurant } from 'src/app/core/interfaces/restaurant';
import { RestaurantService } from 'src/app/core/services/restaurant.service';

@Component({
  selector: 'restaurant-details-page',
  templateUrl: './restaurant-details-page.component.html',
  styleUrls: ['./restaurant-details-page.component.scss'],
})
export class RestaurantDetailsPageComponent implements OnInit {
  $restaurant: Observable<Restaurant>;
  restaurantId: string;
  constructor(
    private restaurantService: RestaurantService,
    private route: ActivatedRoute
  ) {}

  getRestaurant(): void {
    this.$restaurant = this.restaurantService.getRestaurant(this.restaurantId);
  }
  ngOnInit(): void {
    this.restaurantId = this.route.snapshot.params['id'];
    this.getRestaurant();
  }
}
