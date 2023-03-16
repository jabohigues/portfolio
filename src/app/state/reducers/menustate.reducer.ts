import { createReducer, on } from '@ngrx/store';
import { MenuState } from 'src/app/core/models/menustate.interface';
import { toggleMenuActive } from '../actions/menustate.actions';

export const initialState: MenuState = {
  initialDivBackActive: false,
  initialIconMenuActive: false,
  initialNavActive: false,
};

export const toggleReducer = createReducer(
  initialState,
  on(toggleMenuActive, (state) => {
    return {
      state,
      initialDivBackActive: !initialState.initialDivBackActive,
      initialIconMenuActive: !initialState.initialIconMenuActive,
      initialNavActive: !initialState.initialNavActive,
    };
  })
  // on(toggleIconMenuActive, (state) => {
  //   return {
  //     ...state,
  //   };
  // }),
  // on(toggleNavActive, (state) => {
  //   return {
  //     ...state,
  //   };
  // })
);
