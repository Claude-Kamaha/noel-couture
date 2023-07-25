import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RdvsService {
  baseUrl = 'http://localhost:3000';
  constructor(
    private http: HttpClient
  ) { }
  getRdvs() {
    return this.http.get(`${this.baseUrl}/getRdvs`)

  }
}
