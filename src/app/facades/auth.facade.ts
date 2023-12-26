import { Injectable } from '@angular/core';
import { AuthApiService } from '../api/auth-api.service';
import { AuthStoreService } from '../store/auth.store';
import { Observable } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthFacade {
  isLoggedIn$: Observable<boolean>;

  constructor(private router: Router, private authApiService: AuthApiService, private authStoreService: AuthStoreService) {
    const token = localStorage.getItem('authToken');
    if (token) {
      this.authStoreService.setLoggedIn(true);
    }
    this.isLoggedIn$ = this.authStoreService.isLoggedIn;

    const currentUrl = this.router.url;
    localStorage.setItem('lastUrl', currentUrl);

    const lastUrl = localStorage.getItem('lastUrl');
    if (lastUrl) {
      this.router.navigateByUrl(lastUrl);
    }
  }

  login(email: string, password: string) {
    this.authApiService.login(email, password).pipe(
      map(users => {
        const user = users.find((user: { email: string; password: string; }) => user.email === email && user.password === password);
        if (user) {
          localStorage.setItem('authToken', user.token);
          this.authStoreService.setLoggedIn(true);
          const lastUrl = localStorage.getItem('lastUrl') || '/home';
          this.router.navigateByUrl(lastUrl);
          return user;
        } else {
          throw new Error('Invalid email or password');
        }
      })
    ).subscribe();
  }
  logout() {
    localStorage.removeItem('authToken');
    this.authStoreService.setLoggedIn(false);
    // Stay on the same page after logout
  }
}