import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthFacade {
  private _isLoggedIn = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this._isLoggedIn.asObservable();
  }

  login(email: string, password: string) {
    // Implement your login logic here
    // For example, you might call a login API and store the returned token
    this._isLoggedIn.next(true);
  }

  register(email: string, password: string) {
    // Implement your registration logic here
    // For example, you might call a registration API
  }

  logout() {
    // Implement your logout logic here
    // For example, you might clear the stored token
    this._isLoggedIn.next(false);
  }
}