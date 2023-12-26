import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthFacade } from '../../facades/auth.facade';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isLogged$: Observable<boolean> = this.authFacade.isLoggedIn$;
  isDropdownOpen: boolean = false;
  isMobileMenuOpen:boolean = false;
  currentPage = 'home';

  constructor(private router: Router,
    private authFacade: AuthFacade) { }

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  toggleMobileMenu(): void {
    console.log('toggleDropdown');
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  navigateToHome(): void {
    this.router.navigate(['/home']);
    this.currentPage = 'home';
  }

  navigateToHowItWorks(): void {
    this.router.navigate(['/how-it-works']);
    this.currentPage = 'how-it-works';
  }

  navigateToSubscribe(): void {
    this.router.navigate(['/subscribe']);
    this.currentPage = 'subscribe';
  }

  navigateToContactUs(): void {
    this.router.navigate(['/contact-us']);
    this.currentPage = 'contact-us';
  }

  navigateToLogin(): void {
    this.router.navigate(['/login']);
    this.currentPage = 'login';
  }

  navigateToRegister(): void {
    this.router.navigate(['/register']);
    this.currentPage = 'register';
  }

  logout(): void {
    this.authFacade.logout();
    this.currentPage = 'home';
    this.router.navigate(['/home']);

  }

}
