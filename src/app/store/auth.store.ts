import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthStoreService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  private userDataSubject = new BehaviorSubject<Partial<User>>({});

  get isLoggedIn$() {
    return this.isLoggedInSubject.asObservable();
  }

  get userData$() {
    return this.userDataSubject.asObservable();
  }

  setLoggedIn(isLoggedIn: boolean) {
    this.isLoggedInSubject.next(isLoggedIn);
  }

  setUser(user: User) {
    this.userDataSubject.next(user);
  }
}
