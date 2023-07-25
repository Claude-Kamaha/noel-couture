import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConversationService {
  baseUrl = 'http://localhost:3000';
  constructor(
    private http: HttpClient
  ) { }
  getConversations() {
    return this.http.get(`${this.baseUrl}/getConversation`)

  }
}
