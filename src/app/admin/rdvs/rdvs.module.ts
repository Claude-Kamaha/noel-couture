import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdvsComponent } from './rdvs/rdvs.component';
import { RouterModule, Routes } from '@angular/router';


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
    RouterModule.forChild(routes)
  ]
})
export class RdvsModule { }
