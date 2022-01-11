import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
})
export class NavigationBarComponent implements OnInit {
  btnCartTitle: string = 'Cart';
  btnSignInTitle: string = 'SignIn/SignUp';
  btnCartIcon: string = 'shopping_cart';
  btnSignInIcon: string = 'person';
  constructor() {}

  ngOnInit(): void {}
}
