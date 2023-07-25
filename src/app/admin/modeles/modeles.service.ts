import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModelesService {
  baseUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) { }
  getModeles() {
    return this.http.get(`${this.baseUrl}/getModeles`)

  }
}
