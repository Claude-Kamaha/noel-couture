import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
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
    ClientDashboardComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class ClientDashboardModule { }
