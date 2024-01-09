import { Injectable, OnDestroy } from '@angular/core';
import { AuthApiService } from '../api/auth-api.service';
import { AuthStoreService } from '../store/auth.store';
import { Observable, Subscription } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';
import { filter, map, tap } from 'rxjs/operators';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthFacade implements OnDestroy {
  private subscriptions: Subscription = new Subscription();

  isLoggedIn$: Observable<boolean> = this.authStoreService.isLoggedIn$;
  User$: Observable<Partial<User>> = this.authStoreService.userData$;
  constructor(
    private router: Router,
    private authApiService: AuthApiService,
    private authStoreService: AuthStoreService
  ) {
    const token = localStorage.getItem('authToken');
    if (token) {
      this.authStoreService.setLoggedIn(true);
    }

    const userJson = localStorage.getItem('user');
    if (userJson) {
      const user: User = JSON.parse(userJson);
      this.authStoreService.setUser(user);
    }

    const routerSubscription = this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd
        )
      )
      .subscribe((event: NavigationEnd) => {
        localStorage.setItem('lastUrl', event.urlAfterRedirects);
      });

    this.subscriptions.add(routerSubscription);

    const lastUrl = localStorage.getItem('lastUrl');
    if (lastUrl) {
      this.router.navigateByUrl(lastUrl);
    }
  }

  login(email: string, password: string): void {
    const loginSubscription = this.authApiService
      .login(email, password)
      .pipe(
        tap((user) => {
          if (user) {
            user.password = '';
            localStorage.setItem('authToken', JSON.stringify(user));
            this.getUserData(user.id);
            this.authStoreService.setLoggedIn(true);
            this.router.navigateByUrl('/home');
          } else {
            throw new Error('Invalid email or password');
          }
        })
      )
      .subscribe();

    this.subscriptions.add(loginSubscription);
  }

  register(user: User): void {
    user.img =
      'https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg';

    const registerSubscription = this.authApiService
      .register(user)
      .pipe(
        tap((user) => {
          if (user) {
            user.password = '';
            localStorage.setItem('authToken', JSON.stringify(user));
            this.getUserData(user.id);
            this.authStoreService.setLoggedIn(true);
            this.router.navigateByUrl('/home');
          } else {
            throw new Error('Registration failed');
          }
        })
      )
      .subscribe();

    this.subscriptions.add(registerSubscription);
  }

  getUserData(idUser: number): void {
    const userDataSubscription = this.authApiService
      .getUserByUsername(idUser)
      .pipe(
        map((user: User) => {
          if (user) {
            user.password = '';
            this.authStoreService.setUser(user);
            localStorage.setItem('user', JSON.stringify(user));
            return user;
          } else {
            throw new Error('User not found');
          }
        })
      )
      .subscribe();

    this.subscriptions.add(userDataSubscription);
  }

  logout() {
    this.authStoreService.setLoggedIn(false);
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
