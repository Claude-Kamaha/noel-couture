import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ConversationService } from '../conversation.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss']
})
export class ConversationComponent {
  displayedColumns: string[] = ['contenu', 'envoye', 'creationDate', 'updatedDate',];
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  messages: any;
  constructor(
    private conversationService: ConversationService
  ) { }
  ngOnInit() {
    this.getAllConversations()
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  getAllConversations() {
    this.dataSource = new MatTableDataSource()
    this.conversationService.getConversations().subscribe((response: any) => {

      this.messages = response.response
      this.dataSource = new MatTableDataSource(this.messages)
      this.dataSource.paginator = this.paginator

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
