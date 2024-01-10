import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AccountApiService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getUserByUsername(idUser: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/users/${idUser}`);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/users`);
  }
}
