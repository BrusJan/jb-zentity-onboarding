import { createReducer, on } from '@ngrx/store';
import { Profile } from '.';
import * as actions from './profile.actions';

export interface ProfileState {
  profile: Profile;
}

export const initialProfileState: ProfileState = {
  profile: {} as Profile 
};

export const profileReducer = createReducer(
  initialProfileState,
  on(actions.profileLoadedAction, (state, { profile }) => ({ profile: profile })),
  on(actions.profilePropertyChangedAction, (state, { propertyName, value }) => ({ profile: {...state.profile, [propertyName]: value }})),
);

