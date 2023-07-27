import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DisponibiliteService } from '../disponibilite.service';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { RegistrationComponent } from 'src/app/core/registration/registration.component';

@Component({
  selector: 'app-disponibilite',
  templateUrl: './disponibilite.component.html',
  styleUrls: ['./disponibilite.component.scss']
})
export class DisponibiliteComponent {
  displayedColumns: string[] = ['contenu', 'envoye','dispoDate', 'creationDate', 'updatedDate',];
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  @ViewChild('myInfoDialog') infoDialog = {} as TemplateRef<string>;
  jours: any;
  disponibiliteForm!: UntypedFormGroup;
  dialogRef: any;
  constructor(
    private disponibiliteService: DisponibiliteService,
     // private storage: StorageService,
     private router: Router,
     private dialog: MatDialog,
     public datepipe: DatePipe,
     private formBuilder: UntypedFormBuilder,

    //  public dialogRef: MatDialogRef<RegistrationComponent>,
    //  @Inject(MAT_DIALOG_DATA) public data: any,
 
  ) { }
  ngOnInit() {
    this.getAllConversations()
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
 

  nouveauJour():void{
    this.disponibiliteForm=this.formBuilder.group({

      date_dispo: [''],
      message: [''],
      id_user: [''],
      created_at: [Date()],
      updated_at: [Date()],

    });
  }


  getAllConversations() {
    this.dataSource = new MatTableDataSource()
    this.disponibiliteService.getDisponibility().subscribe((response: any) => {

      this.jours = response.data
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

  newDay(){
    this.nouveauJour();

    this.dialogRef = this.dialog.open(this.infoDialog,
      { data: '', height: 'auto', width: '500px', autoFocus: true });

    this.dialogRef.afterClosed().subscribe((res: any) => {
      if (res) {
        this.getAllConversations()
      }
    });
  }
  onSubmit(){
    console.log(this.disponibiliteForm.value);
    this.disponibiliteForm.value.created_at =
      this.disponibiliteForm.value.created_at == ''
        ? ''
        : this.datepipe.transform(this.disponibiliteForm.value.created_at, 'yyyy-MM-dd hh:mm:ss');

    this.disponibiliteForm.value.updated_at =
      this.disponibiliteForm.value.updated_at == ''
        ? ''
        : this.datepipe.transform(
          this.disponibiliteForm.value.updated_at,
          'yyyy-MM-dd hh:mm:ss'
        );
    this.disponibiliteService.nouveauJour(this.disponibiliteForm.value).subscribe((response)=>{

    })
    
  }
}
