import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent {
  displayedColumns: string[] = ['contenu', 'envoye','creationDate', 'updatedDate',];
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
messages: any;
  constructor(
    private messagesService: MessagesService
  ) {}
  ngOnInit() {
    this.getAllMessages()
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  getAllMessages(){
    this.dataSource= new MatTableDataSource()
    this.messagesService.getMessages().subscribe((response: any) => {
    
      this.messages = response.response
      this.dataSource= new MatTableDataSource(this.messages)
      this.dataSource.paginator =this.paginator

  })

}

applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}
}
