import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddingModalComponent } from 'src/app/shared/adding-modal/adding-modal.component';
import { OwnerRestaurantsService } from '../../core/services/owner-restaurants.service';
import { Subscription } from 'rxjs';
import { Restaurant } from 'src/app/core/interfaces/restaurant';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'owner-restaurants',
  templateUrl: './owner-restaurants.component.html',
  styleUrls: ['./owner-restaurants.component.scss'],
})
export class OwnerRestaurantsComponent implements OnInit, OnDestroy {
  restaurants: Restaurant[] = [];
  ownerRestaurantSubscription: Subscription;
  restaurantId: string;
  constructor(
    public dialog: MatDialog,
    private ownerResService: OwnerRestaurantsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.restaurantId = this.route.snapshot.params['id'];
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
      data: { name: 'restaurant', restaurantId: this.restaurantId },
    });
  }

  ngOnDestroy(): void {
    this.ownerRestaurantSubscription.unsubscribe();
  }
}
