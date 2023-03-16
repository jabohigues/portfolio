import { createSelector } from '@ngrx/store';
import { MenuState } from 'src/app/core/models/menustate.interface';
import { AppState } from '../app.state';

export const selectMenuFeature = (state: AppState) => state.menustate;

export const selectMenuActive = createSelector(
  selectMenuFeature,
  (state: MenuState) => {
    return {
      initialDivBackActive: state.initialDivBackActive,
      initialIconMenuActive: state.initialIconMenuActive,
      initialNavActive: state.initialNavActive,
    };
  }
);
