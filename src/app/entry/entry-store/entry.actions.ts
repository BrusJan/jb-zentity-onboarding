import { createAction, props } from '@ngrx/store';

export const ENTRY_START_CLICKED = '[Entry] Start clicked';
export const USERNAME_CONTINUE_CLICKED = '[UserName] Continue clicked';
export const PWD_CONTINUE_CLICKED = '[Password] Continue clicked';

export const entryAction = createAction(ENTRY_START_CLICKED);
export const usernameAction = createAction(USERNAME_CONTINUE_CLICKED, props<{ username: string }>());
export const passwordAction = createAction(PWD_CONTINUE_CLICKED, props<{ password: string }>());


//export const setProfile = createAction('[Entry] Start clicked', props<Profile>());

