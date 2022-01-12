import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'nav-button',
  templateUrl: './nav-button.component.html',
  styleUrls: ['./nav-button.component.scss'],
})
export class NavButtonComponent implements OnInit {
  @Input() btnIcon = '';
  @Input() btnTitle = '';
  constructor() {}

  ngOnInit(): void {}
}
