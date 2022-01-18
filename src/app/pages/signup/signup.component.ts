import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  customerButton = 'customer';
  ownerButton = 'restaurant owner';
  submitted: boolean = false;

  onSubmit() {
    this.submitted = true;
  }
  ngOnInit(): void {}
}
