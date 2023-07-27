import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModelesService {
  baseUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) { }
  getModeles() {
    return this.http.get(`${this.baseUrl}/getModeles`)
  }
  
  nouveauModele(payload: any):Observable<any> {
    return this.http.post(`${this.baseUrl}/modele`, payload);
  }

}
