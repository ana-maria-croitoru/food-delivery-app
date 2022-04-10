import { Component, OnDestroy, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CartService } from 'src/app/core/services/cart.service';
import { RestaurantService } from 'src/app/core/services/restaurant.service';
import { Meal, OrderMeal } from 'src/app/core/interfaces/meal';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit, OnDestroy {
  items: OrderMeal[];
  restaurantName: string;
  restaurantSubscription: Subscription;
  cartSubscription: Subscription;
  totalPrice: number;
  constructor(
    private dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private cartService: CartService,
    private restaurantService: RestaurantService,
    private router: Router
  ) {
    this.totalPrice = this.cartService.totalPrice;
  }
  ngOnInit() {
    this.items = this.cartService.getItems();
    if (this.items.length > 0) this.getRestaurantName();
    this.cartService.calculateOrderValue();
  }

  removeOrder() {
    this.cartService.clearCart();
    this.items = this.cartService.getItems();
    this.totalPrice = this.cartService.totalPrice;
  }

  increaseMealQuantity(mealId: string) {
    this.cartService.increaseMealQuantity(mealId);
    this.items = this.cartService.getItems();
    this.totalPrice = this.cartService.totalPrice;
  }

  decreaseMealQuantity(mealId: string) {
    this.cartService.decreaseMealQuantity(mealId);
    this.items = this.cartService.getItems();
    this.totalPrice = this.cartService.totalPrice;
  }

  getRestaurantName() {
    this.restaurantSubscription = this.restaurantService
      .getRestaurant(this.cartService.restaurantId)
      .subscribe((restaurant) => (this.restaurantName = restaurant.name));
  }

  placeOrder() {
    this.cartSubscription = this.cartService.placeOrder().subscribe(() => {
      debugger;
      this.router.navigate(['/', 'homepage']);
      this.dialogRef.close();
    });
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
