import { Component } from '@angular/core';
import { Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CartService } from 'src/app/core/services/cart.service';
import { Meal } from 'src/app/core/interfaces/meal';

export interface DialogData {
  meal: Meal;
}

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  nr = 1;

  constructor(
    private dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private cartService: CartService
  ) {}

  increaseNumber() {
    return (this.nr = this.nr + 1);
  }

  decreaseNumber() {
    return this.nr > 1 ? (this.nr = this.nr - 1) : this.nr;
  }

  addToCart(meal: Meal) {
    try {
      this.cartService.addToCart({ ...meal, quantity: this.nr });
    } catch (e) {
      // TODO
      // 1. afiseaza optiuni
      // sterge chestiile si adauga asta
      // nu mai adauga asta -> cancel
    }
    this.dialogRef.close();
  }
}
