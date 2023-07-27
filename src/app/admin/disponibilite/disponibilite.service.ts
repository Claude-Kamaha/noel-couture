import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
  
  nouveauJour(payload: any):Observable<any> {
    return this.http.post(`${this.baseUrl}/jour`, payload);
  }
}
