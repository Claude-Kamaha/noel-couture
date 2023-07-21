import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent {
  sidebarOpen = true;
  sidebarToggler() {
    console.log('sidebar');

    this.sidebarOpen = !this.sidebarOpen
  }
}
