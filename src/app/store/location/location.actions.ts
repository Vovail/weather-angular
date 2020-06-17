import { Action } from '@ngrx/store';

export enum LocationActions {
  GetLocations = '[Location] Get Location',
  GetLocationsSuccess = '[Location] Get Location Success',
  ClearSuggestions = '[Location] Clear Suggestions',
  GetLocationsFail = '[Location] Get Location Fail',
  SelectLocation = '[Location] Select Location',
}

export class GetLocations implements Action {
  public readonly type = LocationActions.GetLocations;
  constructor(public payload: string) {}
}

export class GetLocationsSuccess implements Action {
  public readonly type = LocationActions.GetLocationsSuccess;
  constructor(public payload: any) {}
}

export class GetLocationsFail implements Action {
  public readonly type = LocationActions.GetLocationsFail;
  constructor(public payload: any) {}
}

export class ClearSuggestions implements Action {
  public readonly type = LocationActions.ClearSuggestions;
}

export class SelectLocation implements Action {
  public readonly type = LocationActions.SelectLocation;
  constructor(public payload: any) {}
}

export type LocationActionsUnion =
  | GetLocations
  | GetLocationsSuccess
  | GetLocationsFail
  | SelectLocation
  | ClearSuggestions;
