import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'http://localhost:3000';
  constructor(private http: HttpClient,
    private router: Router) { }

  signUp(payload: any) {
    return this.http.post(`${this.baseUrl}/register`, payload);
  }
}
