import { Injectable } from '@angular/core';
import { OrderMeal } from 'src/app/core/interfaces/meal';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Map<string, OrderMeal> = new Map();
  restaurantId: string;

  addToCart(meal: OrderMeal) {
    if (this.items.size) {
      if (meal.restaurant !== this.restaurantId) {
        throw new Error(
          'Meal does not belong to the same restaurant as the other items in the cart.'
        );
      }
      const orderMeal = this.items.get(meal._id);
      if (orderMeal) {
        this.items.set(meal._id, {
          ...orderMeal,
          quantity: orderMeal.quantity + meal.quantity,
        });
        return;
      }
    }
    this.restaurantId = meal.restaurant;
    this.items.set(meal._id, meal);
  }

  getItems() {
    return Array.from(this.items.values());
  }

  clearCart() {
    this.items = new Map();
    return this.items;
  }

  increaseMealQuantity(mealId: string) {
    const orderMeal = this.items.get(mealId);
    orderMeal.quantity++;
    this.items.set(mealId, orderMeal);
  }

  decreaseMealQuantity(mealId: string) {
    debugger;
    const orderMeal = this.items.get(mealId);
    orderMeal.quantity--;
    if (orderMeal.quantity === 0) {
      this.items.delete(mealId);
    } else {
      this.items.set(mealId, orderMeal);
    }
  }
}
