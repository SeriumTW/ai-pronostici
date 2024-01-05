import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthFacade } from '../../facades/auth.facade';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private authFacade: AuthFacade) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  onLogin(): void {
    if (this.loginForm.valid) {
      console.log('valid');
      const { email, password } = this.loginForm.value;
      console.log(email, password);
      this.authFacade.login(email, password);
    }
  }
}
