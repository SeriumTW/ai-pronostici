import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthFacade } from '../../facades/auth.facade';
import { DropdownService } from '../../services/dropdown.service';
import { Observable, filter } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  isLogged$: Observable<boolean> = this.authFacade.isLoggedIn$;
  isDropdownOpen$: Observable<boolean> = this.dropdownService.isDropdownOpen$;
  isMobileMenuOpen: boolean = false;
  currentPage: string = '';
  isDropdownOpen: boolean | undefined;
  user$ = this.authFacade.User$;

  constructor(
    private router: Router,
    private authFacade: AuthFacade,
    private dropdownService: DropdownService
  ) {
    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd
        )
      )
      .subscribe((event: NavigationEnd) => {
        localStorage.setItem('lastUrl', event.urlAfterRedirects);
        this.currentPage = event.urlAfterRedirects;
      });

    this.dropdownService.isDropdownOpen$.subscribe((isOpen) => {
      this.isDropdownOpen = isOpen;
    });
  }

  toggleDropdown(): void {
    this.dropdownService.toggleDropdown(!this.isDropdownOpen);
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  navigateToProfile(): void {
    this.router.navigate(['/account']);
  }

  navigateToHome(): void {
    this.router.navigate(['/home']);
  }

  navigateToHowItWorks(): void {
    this.router.navigate(['/how-it-works']);
  }

  navigateToSubscribe(): void {
    this.router.navigate(['/subscribe']);
  }

  navigateToContactUs(): void {
    this.router.navigate(['/contact-us']);
  }

  navigateToLogin(): void {
    this.router.navigate(['/login']);
  }

  navigateToRegister(): void {
    this.router.navigate(['/register']);
  }

  logout(): void {
    this.authFacade.logout();
    this.dropdownService.toggleDropdown(false);
    this.router.navigate(['/home']);
  }
}
