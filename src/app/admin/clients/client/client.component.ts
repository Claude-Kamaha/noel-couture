import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { ClientsService } from '../clients.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent {
  users: any;
  @ViewChild('data')
  data!: ElementRef;
  constructor(
    private clientsService: ClientsService
  ) {

  }
  ngOnInit() {
    this.getAllUsers()
  }
  getAllUsers() {
    this.clientsService.getUsers().subscribe((res) => {
      console.log(res);
      this.users = res
     
    })
  }
}
