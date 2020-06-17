import { ActionReducerMap } from '@ngrx/store';
import {
  reducer as locationReducer,
  ILocationState,
} from './location/location.reducer';

export interface State {
  location: ILocationState;
}

export const reducers: ActionReducerMap<State> = {
  location: locationReducer,
};
