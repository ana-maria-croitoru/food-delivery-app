import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { CartComponent } from 'src/app/features/cart/cart.component';

@Component({
  selector: 'navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
})
export class NavigationBarComponent implements OnInit {
  btnCartTitle: string = 'Cart';
  btnSignInTitle: string = 'SignIn/SignUp';
  btnOrdersTitle: string = 'Orders';
  btnCartIcon: string = 'shopping_cart';
  btnSignInIcon: string = 'person';
  isUserAuthenticated: boolean;
  isUserOwner: boolean;
  isUserCustomer: boolean;
  userSubscription: Subscription;

  constructor(
    public dialog: MatDialog,
    public authenticationService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userSubscription = this.authenticationService.userObservable.subscribe(
      () => {
        this.isUserAuthenticated =
          this.authenticationService.isUserAuthenticated;
        this.isUserOwner = this.authenticationService.isOwner;
        this.isUserCustomer = this.authenticationService.isCustomer;
        if (this.isUserAuthenticated) {
          this.btnSignInTitle = 'Logout';
        } else {
          this.btnSignInTitle = 'SignIn/SignUp';
        }
      }
    );
  }

  handleUserAction() {
    if (this.isUserAuthenticated) {
      this.authenticationService.logout();
      return;
    }
    this.router.navigate(['login']);
  }

  openOrdersPage() {
    this.router.navigate(['orderspage']);
  }

  openOwnerRestaurantsPage() {
    this.router.navigate(['owner-restaurants']);
  }

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
