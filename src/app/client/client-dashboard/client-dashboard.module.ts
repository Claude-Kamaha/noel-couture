import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {
    path: '',
    children: [
      {
        path: '',
        component: ClientDashboardComponent
      }
    ]
  }

]

@NgModule({
  declarations: [
    ClientDashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ClientDashboardModule { }
