import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './shared/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { ModalComponent } from './shared-components/modal/modal.component';
import { SharedComponentsModule } from './shared-components/shared-components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from './core/auth.module';



@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
  ],

  imports: [
    BrowserModule,
    NoopAnimationsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,

    MaterialModule,
    HttpClientModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
