import { createSelector } from '@ngrx/store';
import { LocationActions, LocationActionsUnion } from './location.actions';
import { State } from '../index';

interface ILocationLocale {
  locale1: string | null;
  locale2: string | null;
  locale3: string | null;
  locale4: string | null;
}

export interface ILocationsData {
  address: string[];
  adminDistrict: string[];
  adminDistrictCode: string[] | null[];
  city: string[];
  country: string[];
  countryCode: string[];
  displayName: string[];
  ianaTimeZone: string[];
  latitude: number[];
  locale: ILocationLocale[];
  longitude: number[];
  neighborhood: string[] | null[];
  placeId: string[];
  postalCode: string[];
  postalKey: string[];
  disputedArea: boolean[];
  iataCode: string[];
  icaoCode: string[];
  locId: string[] | null[];
  locationCategory: string[] | null[];
  pwsId: string[] | null[];
  type: string[];
}

export interface ILocationSuggestion {
  address: string;
  adminDistrict: string;
  adminDistrictCode: string | null;
  city: string;
  country: string;
  countryCode: string;
  displayName: string;
  ianaTimeZone: string;
  latitude: number;
  locale: ILocationLocale;
  longitude: number;
  neighborhood: string | null;
  placeId: string;
  postalCode: string;
  postalKey: string;
  disputedArea: boolean;
  iataCode: string;
  icaoCode: string;
  locId: string | null;
  locationCategory: string | null;
  pwsId: string | null;
  type: string;
}

export interface ILocationsApiData {
  location: ILocationSuggestion;
}

interface ISelectedLocation {
  latitude: string;
  longitude: string;
  name: string;
  placeId?: string;
}

export interface ILocationState {
  selected: ISelectedLocation;
  suggestions: ILocationsData | null;
  loading: boolean;
  error: boolean;
}

const initialState: ILocationState = {
  selected: {
    name: 'Ivano-Frankivsk',
    latitude: '48.923',
    longitude: '24.71',
  },
  suggestions: null,
  loading: false,
  error: false,
};

export const reducer = (
  state: ILocationState = initialState,
  action: LocationActionsUnion
) => {
  switch (action.type) {
    case LocationActions.GetLocationsSuccess:
      return { ...state, suggestions: action.payload, loading: false };    
    case LocationActions.GetLocationsFail:
      return { ...state, error: true, loading: false };
    case LocationActions.GetLocations:
      return { ...state, error: false, loading: true, suggestions: null };
    case LocationActions.SelectLocation:
      return { ...state, selected: action.payload, suggestions: null };
    default:
      return state;
  }
};

const selectLocation = (state: State) => state.location;

export const selectLocationName = createSelector(
  selectLocation,
  (state: ILocationState) => state.selected.name
);

export const selectSuggestions = createSelector(
  selectLocation,
  (state: ILocationState) => {
    if (state.suggestions) {
      const result: ILocationSuggestion[] = state.suggestions.address.map(
        (item: string, i: number) => {
          const suggestion: ILocationSuggestion | any = Object.keys(
            state.suggestions
          ).reduce((result: Object, key: string) => {
            result[key] = state.suggestions[key][i];
            return result;
          }, {});

          return suggestion;
        }
      );
      return result;
    } 
    return [];
  }
);
