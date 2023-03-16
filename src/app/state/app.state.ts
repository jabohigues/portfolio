import { ActionReducerMap } from '@ngrx/store';
import { MenuState } from '../core/models/menustate.interface';
import { toggleReducer } from './reducers/menustate.reducer';

export interface AppState {
  menustate: MenuState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  menustate: toggleReducer,
};
