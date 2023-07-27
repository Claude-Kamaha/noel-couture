import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm!: UntypedFormGroup;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {

  }
  ngOnInit() {
    this.createLoginForm()

  }
createLoginForm(){
  this.loginForm=this.fb.group({

    email: [''],
    password: [''],
   
  });
}

  onSubmit() {
    console.log(this.loginForm.value)
    this.authService.login(this.loginForm.value).subscribe((response)=>{
   
      this.router.navigate(['client'])
 
      
    })
    
  }
}
