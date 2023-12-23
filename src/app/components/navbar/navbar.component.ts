import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isDropdownOpen: boolean = false;
  
  isMobileMenuOpen:boolean = false;
  currentPage = 'home';

  constructor(private router: Router) { }

  isLoggedIn(): boolean {
    return false;
  }

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  toggleMobileMenu() {
    console.log('toggleDropdown');
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  navigateToHome() {
    this.router.navigate(['/home']);
    this.currentPage = 'home';
  }

  navigateToHowItWorks() {
    this.router.navigate(['/how-it-works']);
    this.currentPage = 'how-it-works';
  }

  navigateToSubscribe() {
    this.router.navigate(['/subscribe']);
    this.currentPage = 'subscribe';
  }

  navigateToContactUs() {
    this.router.navigate(['/contact-us']);
    this.currentPage = 'contact-us';
  }

}
