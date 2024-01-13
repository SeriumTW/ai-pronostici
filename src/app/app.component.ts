import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'web-app';
  isAccountRoute = false;

  constructor(private ngxService: NgxUiLoaderService, private router: Router) {}

  ngOnInit(): void {
    this.ngxService.start(); // start foreground spinner of the master loader with 'default' taskId
    // Stop the foreground loading after 5s
    setTimeout(() => {
      this.ngxService.stop(); // stop foreground spinner of the master loader with 'default' taskId
    }, 5000);

    this.ngxService.startBackground('do-background-things');
    this.ngxService.stopBackground('do-background-things');

    this.ngxService.startLoader('default'); // start foreground spinner of the loader "loader-01" with 'default' taskId
    // Stop the foreground loading after 5s
    setTimeout(() => {
      this.ngxService.stopLoader('default'); // stop foreground spinner of the loader "loader-01" with 'default' taskId
    }, 5000);

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.ngxService.start();
      } else if (event instanceof NavigationEnd) {
        this.isAccountRoute = event.urlAfterRedirects.includes('account');
        this.ngxService.stop();
      }
    });
  }
}
