import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyComponent } from './layout/empty/empty.component';
import { LoginComponent } from './core/login/login.component';
import { AdminPanelComponent } from './layout/admin-panel/admin-panel.component';
import { UserPanelComponent } from './layout/user-panel/user-panel.component';
import { ClientDashboardComponent } from './client/client-dashboard/client-dashboard/client-dashboard.component';
import { RegistrationComponent } from './core/registration/registration.component';

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
      {
        path: 'modeles',
        loadChildren: () =>
          import('./admin/modeles/modeles.module').then((m) => m.ModelesModule),
      },
      {
        path: 'rdvs',
        loadChildren: () =>
          import('./admin/rdvs/rdvs.module').then((m) => m.RdvsModule),
      },
      {
        path: 'messages',
        loadChildren: () =>
          import('./admin/messages/messages.module').then((m) => m.MessagesModule),
      },
      {
        path: 'conversations',
        loadChildren: () =>
          import('./admin/conversation/conversation.module').then((m) => m.ConversationModule),
      },
      {
        path: 'disponibilites',
        loadChildren: () =>
          import('./admin/disponibilite/disponibilite.module').then((m) => m.DisponibiliteModule),
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
      {
        path: 'signUp',
        component: RegistrationComponent,
      },
    ]
  },

  {
    path: '',
    component: UserPanelComponent,
    children: [
      {
        path: 'client',
        component: ClientDashboardComponent,
      },
    ]
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

