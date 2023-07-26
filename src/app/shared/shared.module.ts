import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagePipe } from './pipes/image.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ImagePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ImagePipe
  ]
})
export class SharedModule { }
