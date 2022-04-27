import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  NewRestaurant,
  SafeNewRestaurant,
  Restaurant,
} from '../interfaces/restaurant';
import { AuthenticationService } from './authentication.service';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class OwnerRestaurantsService {
  private ownerRestaurants: Restaurant[] = [];
  public restaurantSubject: BehaviorSubject<Restaurant[]> = new BehaviorSubject(
    []
  );
  constructor(
    private http: HttpClient,
    private authService: AuthenticationService
  ) {}

  getOwnerRestaurants(): Observable<Restaurant[]> {
    this.http
      .get<Restaurant[]>('http://localhost:4000/owner/restaurants/', {
        headers: {
          'x-access-token': this.authService.accessToken,
        },
      })
      .subscribe((restaurants) => {
        this.ownerRestaurants = restaurants;
        this.restaurantSubject.next(restaurants);
      });
    return this.restaurantSubject.asObservable();
  }

  addNewRestaurant(name, description) {
    return this.http
      .post<SafeNewRestaurant>(
        'http://localhost:4000/restaurants',
        {
          name,
          description,
        },
        {
          headers: {
            'x-access-token': this.authService.accessToken,
          },
        }
      )
      .pipe(
        tap((restaurant) => {
          this.ownerRestaurants.push(restaurant);
          this.restaurantSubject.next(this.ownerRestaurants);
          return this.restaurantSubject;
        })
      );
  }
}
