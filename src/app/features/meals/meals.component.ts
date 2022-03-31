import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MealService } from 'src/app/core/services/meal.service';
import { Meal } from 'src/app/core/interfaces/meal';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/modal/modal.component';

@Component({
  selector: 'meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.scss'],
})
export class MealsComponent implements OnInit, OnDestroy {
  meals: Meal[] = [];
  mealsSubscription: Subscription;
  @Input() restaurantId;
  constructor(
    private mealService: MealService,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) {}

  getMeals(restaurantId: string): void {
    this.mealsSubscription = this.mealService
      .getMeals(restaurantId)
      .subscribe((meals) => (this.meals = meals));
  }
  ngOnInit(): void {
    this.getMeals(this.restaurantId);
  }

  ngOnDestroy(): void {
    this.mealsSubscription.unsubscribe();
  }

  openDialog(meal: Meal) {
    this.dialog.open(ModalComponent, {
      width: '500px',
      data: {
        meal,
      },
    });
  }
}
