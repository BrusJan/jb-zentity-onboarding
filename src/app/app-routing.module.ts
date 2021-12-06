import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'edit-profile', loadChildren: () => import('./edit-profile/edit-profile.module').then(m => m.EditProfileModule) },
  { path: '', loadChildren: () => import('./entry/entry.module').then(m => m.EntryModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
