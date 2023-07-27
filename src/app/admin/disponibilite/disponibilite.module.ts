import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { DisponibiliteComponent } from './disponibilite/disponibilite.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { SharedComponentsModule } from 'src/app/shared-components/shared-components.module';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: DisponibiliteComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    DisponibiliteComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    SharedComponentsModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  providers: [DatePipe, DisponibiliteComponent],
})
export class DisponibiliteModule { }
