import { Component, TemplateRef, ViewChild } from '@angular/core';
import { ClientsService } from '../../clients/clients.service';
import { ModelesService } from '../modeles.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator,MatPaginatorModule } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';


@Component({
  selector: 'app-modeles',
  templateUrl: './modeles.component.html',
  styleUrls: ['./modeles.component.scss']
})

export class ModelesComponent {
  modeles: any;
  dialogRef: any;
  displayedColumns: string[] = ['modele', 'creationDate', 'updatedDate'];
  dataSource = new MatTableDataSource<any>();
  modeleForm!: UntypedFormGroup;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  @ViewChild('myInfoDialog') infoDialog = {} as TemplateRef<string>;

  constructor(
    private modelesService: ModelesService,
     private router: Router,
     private dialog: MatDialog,
     public datepipe: DatePipe,
     private formBuilder: UntypedFormBuilder,
 
  ) { }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  ngOnInit() {
    this.getAllModeles()
  }
  private base64textString:String="";
  
  handleFileSelect(evt:any){
      var files = evt.target.files;
      var file = files[0];
    
    if (files && file) {
        var reader = new FileReader();

        reader.onload =this._handleReaderLoaded.bind(this);

        reader.readAsBinaryString(file);
    }
  }
  
  _handleReaderLoaded(readerEvt:any) {
     var binaryString = readerEvt.target.result;
            this.base64textString= btoa(binaryString);
            console.log(btoa(binaryString));
    }


  nouveauModele():void{
    this.modeleForm=this.formBuilder.group({

      nom: [''],
      prix: [''],
      image: [''],
      id_user: [''],
      idtype_mod: [1],
      created_at: [Date()],
      updated_at: [Date()],

    });
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

newModele(){
  this.nouveauModele();

  this.dialogRef = this.dialog.open(this.infoDialog,
    { data: '', height: 'auto', width: '500px', autoFocus: true });

  this.dialogRef.afterClosed().subscribe((res: any) => {
    if (res) {
     
      
    }
  });
}
onSubmit(){
  this.modeleForm.value.image= this.base64textString
  console.log(this.modeleForm.value);
  this.modeleForm.value.created_at =
    this.modeleForm.value.created_at == ''
      ? ''
      : this.datepipe.transform(this.modeleForm.value.created_at, 'yyyy-MM-dd hh:mm:ss');

  this.modeleForm.value.updated_at =
    this.modeleForm.value.updated_at == ''
      ? ''
      : this.datepipe.transform(
        this.modeleForm.value.updated_at,
        'yyyy-MM-dd hh:mm:ss'
      );
  this.modelesService.nouveauModele(this.modeleForm.value).subscribe((response)=>{

  })
  
}
}
