import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MessagesService } from '../../messages/messages.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { RdvsService } from '../rdvs.service';

@Component({
  selector: 'app-rdvs',
  templateUrl: './rdvs.component.html',
  styleUrls: ['./rdvs.component.scss']
})
export class RdvsComponent {
  displayedColumns: string[] = ['title', 'description', 'contenu', 'envoye', 'rdvDate', 'creationDate',];

  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  rdvs: any;
  constructor(
    private rdvsService: RdvsService
  ) { }
  ngOnInit() {
    this.getAllRdvs()
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  getAllRdvs() {
    this.dataSource = new MatTableDataSource()
    this.rdvsService.getRdvs().subscribe((response: any) => {

      this.rdvs = response.response
      this.dataSource = new MatTableDataSource(this.rdvs)
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
