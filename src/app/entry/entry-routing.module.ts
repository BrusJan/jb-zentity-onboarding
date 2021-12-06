import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntryComponent } from './entry.component';
import { PasswordComponent } from './password/password.component';
import { UserNameComponent } from './user-name/user-name.component';

const routes: Routes = [
  { path: '', component: EntryComponent },
  { path: 'user-name', component: UserNameComponent },
  { path: 'password', component: PasswordComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntryRoutingModule { }
