import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddingModalComponent } from 'src/app/shared/adding-modal/adding-modal.component';

@Component({
  selector: 'owner-restaurants',
  templateUrl: './owner-restaurants.component.html',
  styleUrls: ['./owner-restaurants.component.scss'],
})
export class OwnerRestaurantsComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog() {
    this.dialog.open(AddingModalComponent, {
      width: '500px',
      height: '600px',
      data: { name: 'restaurant' },
    });
  }
}
