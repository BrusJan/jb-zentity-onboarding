import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { entryAction } from './entry-store';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent {


  constructor(
    private router: Router,
    private store: Store,
  ) {
  }


  startClicked(): void {
    this.store.dispatch(entryAction());
    this.router.navigate(["user-name"]);
  }
}
