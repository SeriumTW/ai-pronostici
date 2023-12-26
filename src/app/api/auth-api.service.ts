import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
       providedIn: 'root'
})
export class AuthApiService {
       private apiUrl = 'http://your-api-url.com';

       constructor(private http: HttpClient) {}

       login(email: string, password: string): Observable<any> {
              console.log('api')
              // Mock login response
              const mockResponse = [
                     {
                            id: 1,
                            name: 'John Doe',
                            email: 'test@gmail.com',
                            password: '1'
                     },
                     {
                            id: 2,
                            name: 'Jane Doe',
                            email: 'jane.doe@example.com',
                            password: 'password2'
                     }
              ];

              return of(mockResponse);
       }

       register(email: string, password: string): Observable<any> {
              return this.http.post(`${this.apiUrl}/register`, { email, password });
       }
}