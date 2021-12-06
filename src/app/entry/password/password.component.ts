import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { passwordAction } from 'src/app/entry/entry-store';
import { matchValidator } from './match.validator';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {

  passwordForm!: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private router: Router,
    private store: Store,
  ) {
  }

  ngOnInit(): void {
    this.passwordForm = this
      .fb
      .group({
        password: ['', [
          Validators.required,
          Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
          Validators.minLength(6),
          Validators.maxLength(25)
        ]],
        confirmPassword: ['', [
          Validators.required
        ]],
      }, {
        validator: matchValidator('password','confirmPassword')
      });
  }

  continue(formValue: any): void {
    //let newProfile = {...this.profile$};
    //newProfile.userName = 'username set from username component';
    this.store.dispatch(passwordAction({ password: formValue.password }));
    this.router.navigate(['edit-profile']);
  }

}
