import { Component } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { AuthFacade } from '../../facades/auth.facade';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrl: './account.component.css',
})
export class AccountComponent {
  isEditing: boolean = false;
  userProfile$: Observable<Partial<User>> = this.authFacade.User$;
  abbonamento = {
    status: 'ATTIVO',
    startDate: new Date(2022, 1, 1),
  };
  constructor(private authFacade: AuthFacade, private router: Router) {}

  enableEditing(): void {
    this.isEditing = true;
  }

  onSubmit(): void {
    this.isEditing = false;
  }

  renewSubscription() {
    console.log('renewSubscription');
  }
  cancelSubscription() {
    console.log('cancelSubscription');
  }

  goHome(): void {
    this.router.navigate(['/']);
  }
}
