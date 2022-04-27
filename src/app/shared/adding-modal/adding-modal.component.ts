import { Component, OnInit, Input } from '@angular/core';
import { Inject } from '@angular/core';
import { OwnerRestaurantsService } from '../../core/services/owner-restaurants.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NewRestaurant } from 'src/app/core/interfaces/restaurant';
import { Subscription } from 'rxjs';

export interface DialogData {
  name: string;
}

@Component({
  selector: 'adding-modal',
  templateUrl: './adding-modal.component.html',
  styleUrls: ['./adding-modal.component.scss'],
})
export class AddingModalComponent implements OnInit {
  ownerRestaurantSubscription: Subscription;
  restaurantName: string;
  restaurantDescription: string;
  constructor(
    private dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private ownerResService: OwnerRestaurantsService
  ) {}

  ngOnInit(): void {}

  addNewRestaurant(name, description): void {
    this.ownerRestaurantSubscription = this.ownerResService
      .addNewRestaurant(name, description)
      .subscribe();
    this.dialogRef.close();
  }
}
