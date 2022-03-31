import { Injectable } from '@angular/core';
import { OrderMeal } from 'src/app/core/interfaces/meal';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Map<string, OrderMeal>;
  restaurantId: string;

  constructor() {
    this.items = new Map();
    const localStorageCart = localStorage.getItem('cartMeal');
    if (localStorageCart) {
      this.items = new Map(JSON.parse(localStorageCart));
    }
  }

  setItemsInLocalstorage() {
    localStorage.setItem(
      'cartMeal',
      JSON.stringify(Array.from(this.items.entries()))
    );
  }

  addToCart(meal: OrderMeal) {
    if (this.restaurantId && meal.restaurant !== this.restaurantId) {
      throw new Error(
        'Meal does not belong to the same restaurant as the other items in the cart.'
      );
    }
    if (!this.restaurantId) {
      this.restaurantId = meal.restaurant;
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
  }

  getItems() {
    return Array.from(this.items.values());
  }

  clearCart() {
    this.items = new Map();
    localStorage.removeItem('cartMeal');
  }

  increaseMealQuantity(mealId: string) {
    const orderMeal = this.items.get(mealId);
    orderMeal.quantity++;
    this.items.set(mealId, orderMeal);
    this.setItemsInLocalstorage();
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
  }
}
