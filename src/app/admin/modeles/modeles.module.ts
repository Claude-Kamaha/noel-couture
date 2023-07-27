import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelesComponent } from './modeles/modeles.component';
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
        component: ModelesComponent
      }
    ]
  }
]


@NgModule({
  declarations: [
    ModelesComponent,
    
  ],
  imports: [
    CommonModule,
   SharedModule,
    MaterialModule,
    SharedComponentsModule,
    RouterModule.forChild(routes)
  ],
  providers:[
    
  ]
})
export class ModelesModule { }
