import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DisponibiliteService {
  baseUrl = 'http://localhost:3000';
  constructor(
    private http: HttpClient
  ) { }
  getDisponibility() {
    return this.http.get(`${this.baseUrl}/getFreeDays`)

  }
}
