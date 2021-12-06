import { createAction, props } from '@ngrx/store';
import { Profile } from '.';

export const PROFILE_PROPERTY_CHANGED = '[Profile] Property changed';
export const PROFILE_LOADED = '[Profile] Profile loaded';

export const profilePropertyChangedAction = createAction(PROFILE_PROPERTY_CHANGED, props<{ propertyName: string, value: string }>());
export const profileLoadedAction = createAction(PROFILE_LOADED, props<{ profile: Profile }>());