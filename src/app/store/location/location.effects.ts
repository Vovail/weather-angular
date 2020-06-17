import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import {
  LocationActions,
  GetLocations,
  GetLocationsSuccess,
  GetLocationsFail,
} from './location.actions';
import { ILocationsApiData } from './location.reducer';
import { LocationService } from 'src/app/services/location.service';

@Injectable()
export class LocationsEffects {

  @Effect()
  loadLocations$ = this.actions$.pipe(
    ofType(LocationActions.GetLocations),
    mergeMap((action: GetLocations) =>
      this.locationService.getLocations(action.payload).pipe(
        map(
          (data: ILocationsApiData) => new GetLocationsSuccess(data.location)
        ),
        catchError((error: Error) => of(new GetLocationsFail(error)))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private locationService: LocationService
  ) {}
}
