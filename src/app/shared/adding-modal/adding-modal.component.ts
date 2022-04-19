import { Component, OnInit, Input } from '@angular/core';
import { Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  name: string;
}

@Component({
  selector: 'adding-modal',
  templateUrl: './adding-modal.component.html',
  styleUrls: ['./adding-modal.component.scss'],
})
export class AddingModalComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngOnInit(): void {}
}
