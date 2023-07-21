import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyComponent } from './layout/empty/empty.component';
import { LoginComponent } from './core/login/login.component';
import { AdminPanelComponent } from './layout/admin-panel/admin-panel.component';
import { UserPanelComponent } from './layout/user-panel/user-panel.component';

const routes: Routes = [
  {
    path: '',
    component: AdminPanelComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./layout/layout.module').then((m) => m.LayoutModule),
      },
      {
        path: 'clients',
        loadChildren: () =>
          import('./admin/clients/clients.module').then((m) => m.ClientsModule),
      },

    ]
  },
  {
    path: '',
    component: EmptyComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
    ]
  },

  {
    path: '',
    component: UserPanelComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
    ]
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

