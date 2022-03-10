import { Component, ElementRef, OnInit, Input } from '@angular/core';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
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
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private cartService: CartService
  ) {
    console.log(data);
  }

  increaseNumber() {
    return (this.nr = this.nr + 1);
  }

  decreaseNumber() {
    return this.nr > 1 ? (this.nr = this.nr - 1) : this.nr;
  }

  addToCart(meal: Meal) {
    this.cartService.addToCart(meal);
    window.alert('Your product has been added to the cart!');
  }
}
