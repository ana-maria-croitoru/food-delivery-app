import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'square-button',
  templateUrl: './square-button.component.html',
  styleUrls: ['./square-button.component.scss'],
})
export class SquareButtonComponent implements OnInit {
  @Input() role = '';
  @Input() selected: Boolean = false;

  @Output() selectRoleEvent = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  selectRole(value: string) {
    this.selectRoleEvent.emit(value);
  }
}
