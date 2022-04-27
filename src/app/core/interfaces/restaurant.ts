export interface Restaurant {
  id: number;
  name: string;
  description: string;
}

export interface NewRestaurant {
  name: string;
  description: string;
}

export interface SafeNewRestaurant extends Restaurant {
  accessToken: string;
}
