import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { MaterialModule } from '../shared/material/material.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LoginComponent } from './login/login.component';
import { ModalComponent } from '../shared-components/modal/modal.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    ModalComponent

  ],
  imports: [
    CommonModule,
    SharedModule,
    SharedComponentsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule
  ]
})
export class AuthModule { }
