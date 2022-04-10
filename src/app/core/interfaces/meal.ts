export interface Meal {
  _id: string;
  name: string;
  description: string;
  price: number;
  restaurant: string;
}

export interface OrderMeal extends Meal {
  quantity: number;
}

export interface NewOrderMeal {
  id: string;
  count: number;
}

export interface NewOrder {
  restaurant: string;
  meals: NewOrderMeal[];
}
