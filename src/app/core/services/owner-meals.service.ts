import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Meal } from '../interfaces/meal';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root',
})
export class OwnerMealsService {
  public mealSubject: BehaviorSubject<Meal[]> = new BehaviorSubject([]);
  public ownerMeals: Meal[] = [];
  constructor(
    private http: HttpClient,
    private authService: AuthenticationService
  ) {}

  getOwnerMeals(id: string): Observable<Meal[]> {
    this.http
      .get<Meal[]>(`http://localhost:4000/restaurants/${id}/meals`, {
        headers: {
          'x-access-token': this.authService.accessToken,
        },
      })
      .subscribe((meals) => {
        this.ownerMeals = meals;
        this.mealSubject.next(this.ownerMeals);
      });
    return this.mealSubject.asObservable();
  }

  addNewMeal(name, description, price, restaurantId) {
    return this.http
      .post<Meal>(
        `http://localhost:4000/restaurants/meals`,
        { name, description, price, restaurant: restaurantId },
        { headers: { 'x-access-token': this.authService.accessToken } }
      )
      .pipe(
        tap((meal) => {
          this.ownerMeals.push(meal);
          this.mealSubject.next(this.ownerMeals);
          return this.mealSubject;
        })
      );
  }
}
