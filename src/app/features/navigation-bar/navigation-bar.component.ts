import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CartComponent } from 'src/app/features/cart/cart.component';

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
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog() {
    this.dialog.open(CartComponent, {
      height: '300px',
      width: '400px',
      data: {},
      position: {
        top: '100px',
        right: '100px',
      },
    });
  }
}
