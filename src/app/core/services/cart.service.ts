import { Injectable } from '@angular/core';
import { Meal } from 'src/app/core/interfaces/meal';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Meal[] = [];
  constructor() {}

  addToCart(meal: Meal) {
    this.items.push(meal);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
