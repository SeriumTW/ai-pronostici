import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthApiService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { email, password });
  }

  register(
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    username: string
  ): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, {
      firstName,
      lastName,
      email,
      password,
      username,
    });
  }
}
