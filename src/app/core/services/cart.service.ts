import { Injectable } from '@angular/core';
import { OrderMeal } from 'src/app/core/interfaces/meal';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Map<string, OrderMeal>;
  restaurantId: string;
  totalPrice: number = 0;

  constructor() {
    this.items = new Map();
    const localStorageCart = localStorage.getItem('cartMeal');
    if (localStorageCart) {
      this.items = new Map(JSON.parse(localStorageCart));
      this.restaurantId = localStorage.getItem('restaurantId');
    }
  }

  setItemsInLocalstorage() {
    localStorage.setItem(
      'cartMeal',
      JSON.stringify(Array.from(this.items.entries()))
    );
  }

  getRestaurant() {
    return this.restaurantId;
  }

  addToCart(meal: OrderMeal) {
    if (this.restaurantId && meal.restaurant !== this.restaurantId) {
      throw new Error(
        'Meal does not belong to the same restaurant as the other items in the cart.'
      );
    }
    if (!this.restaurantId) {
      this.restaurantId = meal.restaurant;
      localStorage.setItem('restaurantId', this.restaurantId);
    }
    const orderMeal = this.items.get(meal._id);
    if (orderMeal) {
      this.items.set(meal._id, {
        ...orderMeal,
        quantity: orderMeal.quantity + meal.quantity,
      });
    } else {
      this.items.set(meal._id, meal);
    }
    this.setItemsInLocalstorage();
    this.calculateOrderValue();
  }

  getItems() {
    return Array.from(this.items.values());
  }

  calculateOrderValue() {
    this.totalPrice = 0;
    for (let [_, orderMeal] of this.items) {
      this.totalPrice += orderMeal.quantity * (orderMeal.price / 100);
    }
  }

  clearCart() {
    this.items = new Map();
    localStorage.removeItem('cartMeal');
    this.totalPrice = 0;
  }

  increaseMealQuantity(mealId: string) {
    const orderMeal = this.items.get(mealId);
    orderMeal.quantity++;
    this.items.set(mealId, orderMeal);
    this.setItemsInLocalstorage();
    this.calculateOrderValue();
  }

  decreaseMealQuantity(mealId: string) {
    const orderMeal = this.items.get(mealId);
    orderMeal.quantity--;
    if (orderMeal.quantity === 0) {
      this.items.delete(mealId);
    } else {
      this.items.set(mealId, orderMeal);
    }
    this.setItemsInLocalstorage();
    this.calculateOrderValue();
  }
}
