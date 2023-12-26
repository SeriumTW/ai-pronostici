import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';

@Injectable({
       providedIn: 'root'
})
export class AuthStoreService {
       private isLoggedInSubject = new BehaviorSubject<boolean>(false);

       get isLoggedIn() {
              return this.isLoggedInSubject.asObservable();
       }

       setLoggedIn(isLoggedIn: boolean) {
              console.log('store')
              this.isLoggedInSubject.next(isLoggedIn);
       }
}