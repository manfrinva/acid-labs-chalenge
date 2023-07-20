import {FocusMonitor} from '@angular/cdk/a11y';
import {BooleanInput, coerceBooleanProperty} from '@angular/cdk/coercion';
import {
  Component,
  ElementRef,
  Inject,
  Input,
  OnDestroy,
  Optional,
  Self,
  ViewChild,
  forwardRef,
} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormBuilder,
  FormControl,
  FormGroup,
  NgControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  MAT_FORM_FIELD,
  MatFormField,
  MatFormFieldControl,
  MatFormFieldModule,
} from '@angular/material/form-field';
import {Subject} from 'rxjs';
import {MatIconModule} from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {NgIf} from '@angular/common';
import { MatCardModule } from '@angular/material/card';

import { ContactsComponent } from './contacts/contacts.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', component: LoginComponent },
  //{ path: '', component: ContactsComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatDialogModule,
    FormsModule,
    MatTableModule,
    NgIf,
    MatCardModule,
    HttpClientModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
