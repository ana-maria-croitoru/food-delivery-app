import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CreateUser, Role, SafeUserData, UserData } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private userSubject: BehaviorSubject<SafeUserData>;
  public user: Observable<SafeUserData>;

  constructor(private http: HttpClient, private router: Router) {
    this.userSubject = new BehaviorSubject<SafeUserData>(
      JSON.parse(localStorage.getItem('user'))
    );
    this.user = this.userSubject.asObservable();
  }

  public get userObservable(): Observable<SafeUserData> {
    return this.userSubject.asObservable();
  }
  public get userValue(): SafeUserData {
    return this.userSubject.value;
  }

  public get isUserAuthenticated(): boolean {
    return Boolean(this.userSubject.value);
  }

  public get userRole(): Role | undefined {
    if (!this.isUserAuthenticated) return;
    return Role[this.userSubject.value.role];
  }

  public get isOwner(): boolean {
    return this.userSubject.value.role === Role.OWNER;
  }

  public get isCustomer(): boolean {
    return this.userSubject.value?.role === Role.CUSTOMER;
  }

  public get accessToken(): string | null {
    const userData = localStorage.getItem('user');
    return userData && JSON.parse(userData).accessToken;
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
    // remove all data from local storage to log user out
    localStorage.clear();
    this.userSubject.next(null);
    this.router.navigate(['/']);
  }
}
