import { Component, ViewChild } from '@angular/core';
import { ClientsService } from '../../clients/clients.service';
import { ModelesService } from '../modeles.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator,MatPaginatorModule } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-modeles',
  templateUrl: './modeles.component.html',
  styleUrls: ['./modeles.component.scss']
})

export class ModelesComponent {
  modeles: any;
  constructor(
    private modelesService: ModelesService
  ) {}
  displayedColumns: string[] = ['modele', 'creationDate', 'updatedDate'];
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  ngOnInit() {
    this.getAllModeles()
  }
  getAllModeles(){
    this.dataSource= new MatTableDataSource()
    this.modelesService.getModeles().subscribe((response: any) => {
      console.log(response.data);
      this.modeles = response.data
      this.dataSource= new MatTableDataSource(this.modeles)

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
