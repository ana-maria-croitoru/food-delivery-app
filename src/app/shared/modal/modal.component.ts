import { Component, ElementRef, OnInit, Input } from '@angular/core';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  mealName: string;
  mealDescription: string;
}

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  nr = 1;

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  increaseNumber() {
    return (this.nr = this.nr + 1);
  }

  decreaseNumber() {
    return this.nr > 1 ? (this.nr = this.nr - 1) : this.nr;
  }
}
