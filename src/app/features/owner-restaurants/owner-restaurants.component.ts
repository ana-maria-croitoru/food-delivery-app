import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddingModalComponent } from 'src/app/shared/adding-modal/adding-modal.component';
import { OwnerRestaurantsService } from '../../core/services/owner-restaurants.service';
import { Subscription } from 'rxjs';
import { Restaurant } from 'src/app/core/interfaces/restaurant';

@Component({
  selector: 'owner-restaurants',
  templateUrl: './owner-restaurants.component.html',
  styleUrls: ['./owner-restaurants.component.scss'],
})
export class OwnerRestaurantsComponent implements OnInit, OnDestroy {
  restaurants: Restaurant[] = [];
  ownerRestaurantSubscription: Subscription;
  constructor(
    public dialog: MatDialog,
    private ownerResService: OwnerRestaurantsService
  ) {}

  ngOnInit(): void {
    this.getOwnerRestaurants();
  }

  getOwnerRestaurants() {
    this.ownerRestaurantSubscription = this.ownerResService
      .getOwnerRestaurants()
      .subscribe((restaurants) => (this.restaurants = restaurants));
  }

  openDialog() {
    this.dialog.open(AddingModalComponent, {
      width: '500px',
      height: '600px',
      data: { name: 'restaurant' },
    });
  }

  ngOnDestroy(): void {
    this.ownerRestaurantSubscription.unsubscribe();
  }
}
