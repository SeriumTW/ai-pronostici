import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  constructor(private router: Router) { }

  navigateToAbout(): void {
    this.router.navigate(['/about']);
  }

  navigateToPrivacyPolicy(): void {
    this.router.navigate(['/privacy-policy']);
  }

  navigateToLicensing(): void {
    this.router.navigate(['/licensing']);
  }

  navigateToContact(): void {
    this.router.navigate(['/contact']);
  }
}
