import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private router: Router) { }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required
  ]);

  hide = true;

  togglePasswordVisibility() {
    this.hide = !this.hide;
  }

  login() {
    const validEmail = 'user@test.com';
    const validPassword = '123';
    if (validEmail === this.emailFormControl.value && validPassword === this.passwordFormControl.value) {
      this.router.navigate(['/dashboard']);
    } else {
      console.log('Campos inválidos');
      // Exibir mensagem de erro, lidar com campos inválidos, etc.
    }
  }

/*
    onLogin() {
    if (this.username === 'user@test.com' && this.password === '123') {
      // Autenticação bem-sucedida
      this.router.navigate(['/dashboard']);
    } else {
      // Credenciais inválidas, exibir mensagem de erro ou tomar outra ação adequada
    }
    this.router.navigate(['/dashboard']);
  }
  */
}
