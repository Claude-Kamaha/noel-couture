import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Output() togglesidebarForMe: EventEmitter<any> = new EventEmitter()

  toggleSidenav() {
    this.togglesidebarForMe.emit();
  }
}
