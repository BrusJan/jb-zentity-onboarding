import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Profile, profileLoadedAction, profilePropertyChangedAction } from './profile-store';
import { ProfileService } from './profile-store/profile.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  profileForm!: FormGroup;
  profileSub?: Subscription;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private store: Store<{ profile: Profile }>,
    private profileService: ProfileService,
  ) {
  }

  ngOnInit(): void {
    this.profileSub = this.profileService.getProfileJson().subscribe(
      (profile: Profile) => {
        this.store.dispatch(profileLoadedAction({profile: profile}));
        this.profileForm.patchValue(profile);
      }
    );
    this.profileForm = this.fb.group({
        name: ['', Validators.required],
        userName: ['', Validators.required],
        address: ['', Validators.required],
        city: ['', Validators.required],
        zip: ['', Validators.required],
        email: ['', Validators.required],
        phone: ['', Validators.required],
      });
  }

  submitForm(formValue: any): void {

  }

  propertyValueChanged(event: any): void {
    this.profileForm.setValue({
      ...this.profileForm.value,
      [event.propertyName]: event.value
    })
    this.store.dispatch(profilePropertyChangedAction(event));

    let propertyName = 'address';
    let value = 'set addr';
    console.log(this.profileForm.value);
    let newProfile = {...this.profileForm.value, [propertyName]: value }
    console.log(newProfile);
  }

  logout(): void {
    this.router.navigate([""]);
  }  

  ngOnDestroy(): void {
    this.profileSub?.unsubscribe();
  }

}
