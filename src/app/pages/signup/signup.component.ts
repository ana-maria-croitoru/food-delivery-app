import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CreateUser, SafeUserData } from 'src/app/core/interfaces/user';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnDestroy {
  signupForm: CreateUser = {
    role: null,
    firstName: null,
    lastName: null,
    email: null,
    password: null,
  };

  authSubscription: Subscription;

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  onSubmit() {
    const { role, firstName, lastName, email, password } = this.signupForm;
    this.authService
      .signup(role.toUpperCase(), firstName, lastName, email, password)
      .subscribe(() => this.router.navigate(['/', 'homepage']));
  }

  selectNewRole(newRole: string) {
    this.signupForm.role = newRole;
  }

  ngOnDestroy(): void {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }
}
