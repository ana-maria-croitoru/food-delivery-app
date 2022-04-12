import { OrderMeal } from './meal';
export interface Order {
  customer: string;
  restaurant: string;
  restaurantname: string;
  meals: OrderMeal[];
  totalAmount: number;
  restaurantOwner: string;
}
