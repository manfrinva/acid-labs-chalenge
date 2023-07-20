import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { User } from '../models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  hide = true;
  userLogin:User = new User();


  constructor(private router: Router,  private service:UserService) { }

  idNumberFormControl  = new FormControl('', [
    Validators.required,
    Validators.maxLength(6)
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required
  ]);

  togglePasswordVisibility() {
    this.hide = !this.hide;
  }

  login() {
    if(this.userLogin.id ==0 || this.userLogin.password !=""){
      this.service.validation(this.userLogin.id , this.userLogin.password).subscribe((result: boolean) => {
        if (result) {
          this.router.navigate(['/contacts']);
        } else {
          alert("Login invalid");
        }
      });
    } else{
      alert('Please insert your Login information!');
    }
  }

}
