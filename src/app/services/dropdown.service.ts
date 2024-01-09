import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DropdownService {
  isDropdownOpen = new BehaviorSubject<boolean>(false);
  isDropdownOpen$ = this.isDropdownOpen.asObservable();

  toggleDropdown(open: boolean) {
    this.isDropdownOpen.next(open);
  }
}
