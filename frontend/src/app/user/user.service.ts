import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:5000'; // Replace with your backend API URL

  constructor(private http: HttpClient) {}

  signup(firstName: string, lastName: string, email: string, password: string): Observable<any> {
    const body = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    };

    return this.http.post<any>(`${this.apiUrl}/signup`, body);
  }

  login(email: string, password: string): Observable<any> {
    const body = {
      email: email,
      password: password
    };

    return this.http.post<any>(`${this.apiUrl}/login`, body);
  }
}