import { Component, OnDestroy, OnInit } from '@angular/core';
import { MealService } from 'src/app/core/services/meal.service';
import { Meal } from 'src/app/core/interfaces/meal';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.scss'],
})
export class MealsComponent implements OnInit, OnDestroy {
  meals: Meal[] = [];
  mealsSubscription: Subscription;
  constructor(
    private mealService: MealService,
    private route: ActivatedRoute
  ) {}

  getMeals(restaurantId: string): void {
    this.mealsSubscription = this.mealService
      .getMeals(restaurantId)
      .subscribe((meals) => (this.meals = meals));
  }
  ngOnInit(): void {
    const restaurantId = this.route.snapshot.params['id'];
    this.getMeals(restaurantId);
  }

  ngOnDestroy(): void {
    this.mealsSubscription.unsubscribe();
  }
}
