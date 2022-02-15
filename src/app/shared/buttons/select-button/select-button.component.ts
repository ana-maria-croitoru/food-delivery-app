import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'select-button',
  templateUrl: './select-button.component.html',
  styleUrls: ['./select-button.component.scss'],
})
export class SelectButtonComponent {
  @Input() value = '';
  @Input() selected: Boolean = false;

  @Output() selectValueEvent = new EventEmitter<string>();
  constructor() {}

  selectValue(value: string) {
    this.selectValueEvent.emit(value);
  }
}
