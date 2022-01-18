import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'square-button',
  templateUrl: './square-button.component.html',
  styleUrls: ['./square-button.component.scss'],
})
export class SquareButtonComponent implements OnInit {
  @Input() button_text = '';
  constructor() {}

  ngOnInit(): void {}
}
