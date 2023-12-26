import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthFacade } from '../../facades/auth.facade';
import { Observable, filter } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isLogged$: Observable<boolean> = this.authFacade.isLoggedIn$;
  isDropdownOpen: boolean = false;
  isMobileMenuOpen:boolean = false;
  currentPage: string = '';

  constructor(private router: Router, private authFacade: AuthFacade) {
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      localStorage.setItem('lastUrl', event.urlAfterRedirects);
      this.currentPage = event.urlAfterRedirects;
    });
  }

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  toggleMobileMenu(): void {
    console.log('toggleDropdown');
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
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
    this.router.navigate(['/home']);

  }

}
