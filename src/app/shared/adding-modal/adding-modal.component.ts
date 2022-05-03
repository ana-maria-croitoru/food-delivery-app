import { Component, OnInit, Input } from '@angular/core';
import { Inject } from '@angular/core';
import { OwnerRestaurantsService } from '../../core/services/owner-restaurants.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { OwnerMealsService } from 'src/app/core/services/owner-meals.service';

export interface DialogData {
  name: string;
  restaurantId: string;
}

@Component({
  selector: 'adding-modal',
  templateUrl: './adding-modal.component.html',
  styleUrls: ['./adding-modal.component.scss'],
})
export class AddingModalComponent implements OnInit {
  ownerRestaurantSubscription: Subscription;
  name: string;
  description: string;
  price: string;
  constructor(
    private dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private ownerResService: OwnerRestaurantsService,
    private ownerMealsService: OwnerMealsService
  ) {}

  ngOnInit(): void {}

  addNewRestaurant(name, description): void {
    this.ownerRestaurantSubscription = this.ownerResService
      .addNewRestaurant(name, description)
      .subscribe();
    this.dialogRef.close();
  }

  addNewMeal(name, description, price, restaurantId): void {
    this.ownerRestaurantSubscription = this.ownerMealsService
      .addNewMeal(name, description, price, restaurantId)
      .subscribe();
    this.dialogRef.close();
  }
}
