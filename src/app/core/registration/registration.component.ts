import { Component, Inject } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  registerForm!: UntypedFormGroup;

  constructor(
    // private storage: StorageService,
    private router: Router,
    private dialog: MatDialog,
    public datepipe: DatePipe,
    private formBuilder: UntypedFormBuilder,
    private authService: AuthService,
    // public dialogRef: MatDialogRef<RegistrationComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: any,

  ) {

  }

  ngOnInit() {
    this.createNewAbuseGroupForm()

  }
  createNewAbuseGroupForm(): void {
    this.registerForm = this.formBuilder.group({

      name: [''],
      email: [''],
      password: [''],
      rdv_id: [2],
      created_at: [Date()],
      updated_at: [Date()],

    });
  }
  onSubmit() {
    console.log(this.registerForm.value);
    this.registerForm.value.created_at =
      this.registerForm.value.created_at == ''
        ? ''
        : this.datepipe.transform(this.registerForm.value.created_at, 'yyyy-MM-dd hh:mm:ss');

    this.registerForm.value.updated_at =
      this.registerForm.value.updated_at == ''
        ? ''
        : this.datepipe.transform(
          this.registerForm.value.updated_at,
          'yyyy-MM-dd hh:mm:ss'
        );


    this.authService.signUp(this.registerForm.value).subscribe((res: any) => {
      console.log(res.data);

    })
  }
  closeDialog() {

  }
}
