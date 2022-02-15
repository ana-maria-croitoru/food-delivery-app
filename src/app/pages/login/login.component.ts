import { Component } from '@angular/core';
import { AuthenticationService } from '../../core/services/authentication.service';
import { Router } from '@angular/router';
import { LoginUser } from 'src/app/core/interfaces/user';
import { Subscription } from 'rxjs';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form: LoginUser = {
    email: null,
    password: null,
  };
  authSubscription: Subscription;

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  onSubmit() {
    const { email, password } = this.form;
    this.authSubscription = this.authService
      .signin(email, password)
      .subscribe(() => this.router.navigate(['/', 'homepage']));
  }

  ngOnDestroy(): void {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }
}
