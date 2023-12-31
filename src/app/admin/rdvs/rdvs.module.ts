import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdvsComponent } from './rdvs/rdvs.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: RdvsComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    RdvsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class RdvsModule { }
