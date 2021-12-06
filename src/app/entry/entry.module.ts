import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntryRoutingModule } from './entry-routing.module';
import { EntryComponent } from './entry.component';
import { UserNameComponent } from './user-name/user-name.component';
import { PasswordComponent } from './password/password.component';
import { StoreModule } from '@ngrx/store';
import { entryReducer } from './entry-store';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EntryComponent,
    UserNameComponent,
    PasswordComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    EntryRoutingModule,
    StoreModule.forFeature('entryModule', entryReducer)
  ]
})
export class EntryModule { }
