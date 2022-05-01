import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddingModalComponent } from 'src/app/shared/adding-modal/adding-modal.component';
import { Meal } from 'src/app/core/interfaces/meal';
@Component({
  selector: 'owner-meals',
  templateUrl: './owner-meals.component.html',
  styleUrls: ['./owner-meals.component.scss'],
})
export class OwnerMealsComponent implements OnInit {
  public meals: Meal[];
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(AddingModalComponent, {
      width: '500px',
      height: '600px',
      data: { name: 'meal' },
    });
  }

  ngOnInit(): void {}
}
