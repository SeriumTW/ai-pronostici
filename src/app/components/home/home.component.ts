import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router: Router) { }

  goToSubscription(): void {
    this.router.navigate(['/subscribe']);
  }

  goToHowToWork(): void {
    this.router.navigate(['/how-it-works']);
  }
}
