import { createReducer, on } from '@ngrx/store';
import * as actions from './entry.actions';

export enum Location {
  start,
  username,
  password,
  profile,
}

export interface EntryState {
  location: Location,
  username: string,
  password: string,
}

export const initialState: EntryState = {
  location: Location.start,
  username: '',
  password: '',
};

export const entryReducer = createReducer(
  initialState,
  on(actions.entryAction, state => ({ ...state, location: Location.username })),
  on(actions.usernameAction, (state, {username}) => ({ location: Location.password, username: username, password: state.password })),
  on(actions.passwordAction, (state, {password}) => ({ location: Location.profile, username: state.username, password: password })),
);

