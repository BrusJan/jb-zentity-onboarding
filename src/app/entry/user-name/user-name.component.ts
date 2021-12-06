import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { usernameAction } from 'src/app/entry/entry-store';

@Component({
  selector: 'app-user-name',
  templateUrl: './user-name.component.html',
  styleUrls: ['./user-name.component.scss']
})
export class UserNameComponent implements OnInit {

  usernameForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private store: Store,
  ) {
  }

  ngOnInit(): void {
    this.usernameForm = this
      .fb
      .group({
        username: ['', [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20)
        ]]
      });
  }

  continue(formValue: any): void {
    //let newProfile = {...this.profile$};
    //newProfile.userName = 'username set from username component';
    this.store.dispatch(usernameAction({ username: formValue.username }));
    this.router.navigate(['password']);
  }

}
