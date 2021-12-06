import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditProfileRoutingModule } from './edit-profile-routing.module';
import { EditProfileComponent } from './edit-profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditRowComponent } from './edit-row/edit-row.component';
import { StoreModule } from '@ngrx/store';
import { profileReducer } from './profile-store';

@NgModule({
  declarations: [
    EditProfileComponent,
    EditRowComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    EditProfileRoutingModule,
    StoreModule.forFeature('profileModule', profileReducer)
  ]
})
export class EditProfileModule { }
