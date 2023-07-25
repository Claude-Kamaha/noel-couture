import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConversationComponent } from './conversation/conversation.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ConversationComponent
      }
    ]
  }
]


@NgModule({
  declarations: [
    ConversationComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ]
})
export class ConversationModule { }
