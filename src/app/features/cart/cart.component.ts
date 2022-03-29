import { Component } from '@angular/core';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CartService } from 'src/app/core/services/cart.service';
import { Meal } from 'src/app/core/interfaces/meal';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  items;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private cartService: CartService
  ) {
    this.items = this.cartService.getItems();
  }

  removeOrder() {
    this.cartService.clearCart();
  }

  increaseMealQuantity(mealId: string) {
    this.cartService.increaseMealQuantity(mealId);
    this.items = this.cartService.getItems();
  }

  decreaseMealQuantity(mealId: string) {
    this.cartService.decreaseMealQuantity(mealId);
    this.items = this.cartService.getItems();
  }
}

export interface DialogData {
  meal: Meal;
}
