import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CreateUser, SafeUserData, UserData } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private userSubject: BehaviorSubject<SafeUserData>;
  public user: Observable<SafeUserData>;

  constructor(private http: HttpClient) {
    this.userSubject = new BehaviorSubject<SafeUserData>(
      JSON.parse(localStorage.getItem('user'))
    );
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): SafeUserData {
    return this.userSubject.value;
  }

  signin(email: string, password: string) {
    return this.http
      .post<UserData>('http://localhost:4000/auth/signin', {
        email,
        password,
      })
      .pipe(
        map((user) => {
          localStorage.setItem('user', JSON.stringify(user));
          const { accessToken, ...safeUserData } = user;
          this.userSubject.next(safeUserData);
          return safeUserData;
        })
      );
  }

  signup(role, firstName, lastName, email, password) {
    return this.http
      .post<UserData>('http://localhost:4000/auth/signup', {
        role,
        firstName,
        lastName,
        email,
        password,
      })
      .pipe(
        map((user) => {
          localStorage.setItem('user', JSON.stringify(user));
          const { accessToken, ...safeUserData } = user;
          this.userSubject.next(safeUserData);
          return safeUserData;
        })
      );
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.clear();
    this.userSubject.next(null);
  }
}
