import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddingModalComponent } from 'src/app/shared/adding-modal/adding-modal.component';
import { Meal } from 'src/app/core/interfaces/meal';
import { Subscription } from 'rxjs';
import { OwnerMealsService } from '../../core/services/owner-meals.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'owner-meals',
  templateUrl: './owner-meals.component.html',
  styleUrls: ['./owner-meals.component.scss'],
})
export class OwnerMealsComponent implements OnInit {
  public ownerMealsSubscription: Subscription;
  public meals: Meal[] = [];
  restaurantId: string;
  constructor(
    public dialog: MatDialog,
    public ownerMealsService: OwnerMealsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.restaurantId = this.route.snapshot.params['id'];
    this.getOwnerMeals(this.restaurantId);
  }

  getOwnerMeals(restaurantId: string) {
    this.ownerMealsSubscription = this.ownerMealsService
      .getOwnerMeals(restaurantId)
      .subscribe((meals) => (this.meals = meals));
  }

  openDialog() {
    this.dialog.open(AddingModalComponent, {
      width: '500px',
      height: '600px',
      data: { name: 'meal', restaurantId: this.restaurantId },
    });
  }
}
