import { Injectable } from '@angular/core';
import { Restaurant } from 'src/app/core/interfaces/restaurant';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  constructor(private http: HttpClient) {}

  getRestaurants(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>('http://localhost:4000/restaurants');
  }

  getRestaurant(id: string): Observable<Restaurant> {
    return this.http.get<Restaurant>(`http://localhost:4000/restaurants/${id}`);
  }
}
