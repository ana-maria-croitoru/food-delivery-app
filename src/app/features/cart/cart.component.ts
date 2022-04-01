import { Component, OnDestroy, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CartService } from 'src/app/core/services/cart.service';
import { RestaurantService } from 'src/app/core/services/restaurant.service';
import { Meal, OrderMeal } from 'src/app/core/interfaces/meal';
import { Subscription } from 'rxjs';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit, OnDestroy {
  items: OrderMeal[];
  restaurantName: string;
  restaurantSubscription: Subscription;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private cartService: CartService,
    private restaurantService: RestaurantService
  ) {}
  ngOnInit() {
    this.items = this.cartService.getItems();
    this.getRestaurantName();
  }

  removeOrder() {
    this.cartService.clearCart();
    this.items = this.cartService.getItems();
  }

  increaseMealQuantity(mealId: string) {
    this.cartService.increaseMealQuantity(mealId);
    this.items = this.cartService.getItems();
  }

  decreaseMealQuantity(mealId: string) {
    this.cartService.decreaseMealQuantity(mealId);
    this.items = this.cartService.getItems();
  }

  getRestaurantName() {
    this.restaurantSubscription = this.restaurantService
      .getRestaurant(this.cartService.restaurantId)
      .subscribe((restaurant) => (this.restaurantName = restaurant.name));
  }

  ngOnDestroy() {
    if (this.restaurantSubscription) {
      this.restaurantSubscription.unsubscribe();
    }
  }
}

export interface DialogData {
  meal: Meal;
}
