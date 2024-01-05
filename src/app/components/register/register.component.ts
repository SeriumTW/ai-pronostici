import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthFacade } from '../../facades/auth.facade';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private authFacade: AuthFacade) {
    this.registerForm = new FormGroup({
      username: new FormControl('', Validators.required),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {}

  onRegister(): void {
    if (this.registerForm.valid) {
      console.log('valid');
      const { firstName, lastName, email, password, username } =
        this.registerForm.value;
      console.log(firstName, lastName, email, password, username);
      this.authFacade.register(firstName, lastName, email, password, username);
    }
  }
}
