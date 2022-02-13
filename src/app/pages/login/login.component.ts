import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../core/services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';
import { LoginUser } from 'src/app/core/interfaces/user';

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

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  onSubmit() {
    const { email, password } = this.form;
    this.authService
      .signin(email, password)
      .subscribe(() => this.router.navigate(['/', 'homepage']));
  }
}
