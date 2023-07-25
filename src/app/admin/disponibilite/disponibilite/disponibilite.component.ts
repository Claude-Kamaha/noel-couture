import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DisponibiliteService } from '../disponibilite.service';

@Component({
  selector: 'app-disponibilite',
  templateUrl: './disponibilite.component.html',
  styleUrls: ['./disponibilite.component.scss']
})
export class DisponibiliteComponent {
  displayedColumns: string[] = ['contenu', 'envoye', 'creationDate', 'updatedDate',];
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  jours: any;
  constructor(
    private disponibiliteService: DisponibiliteService
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
    this.disponibiliteService.getDisponibility().subscribe((response: any) => {

      this.jours = response.response
      this.dataSource = new MatTableDataSource(this.jours)
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
