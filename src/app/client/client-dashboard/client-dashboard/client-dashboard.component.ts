import { Component } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RegistrationComponent } from 'src/app/core/registration/registration.component';

@Component({
  selector: 'app-client-dashboard',
  templateUrl: './client-dashboard.component.html',
  styleUrls: ['./client-dashboard.component.scss']
})
export class ClientDashboardComponent {
  constructor(

    private router: Router,
    private dialog: MatDialog,
    private formBuilder: UntypedFormBuilder,
  ) {

  }
  registerDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '40%';

    dialogConfig.data = {
      message: 'Filters',
      transaction_type: 'buy',
    };
    const dialog = this.dialog.open(RegistrationComponent, dialogConfig);
    dialog.afterClosed().subscribe((response) => {
      if (response) {
        console.log('Registration dialog rsponse');

      }
    });
  }
}
