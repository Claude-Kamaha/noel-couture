import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { EmptyComponent } from './empty/empty.component';
import { RouterModule } from '@angular/router';
import { SidenavComponent } from './admin-panel/sidenav/sidenav.component';
import { NavbarComponent } from './admin-panel/navbar/navbar.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material/material.module';



@NgModule({
  declarations: [
    AdminPanelComponent,
    UserPanelComponent,
    EmptyComponent,
    SidenavComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MaterialModule
  ]
})
export class LayoutModule { }
