import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Meal } from 'src/app/core/interfaces/meal';

@Injectable({
  providedIn: 'root',
})
export class MealService {
  constructor(private http: HttpClient) {}
  getMeals(id: string): Observable<Meal[]> {
    return this.http.get<Meal[]>(
      `http://localhost:4000/restaurants/${id}/meals`
    );
  }
}
