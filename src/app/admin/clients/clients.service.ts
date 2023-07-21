import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  baseUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) {

  }
  getUsers() {
    return this.http.get(`${this.baseUrl}/getUsers`)

  }
}
