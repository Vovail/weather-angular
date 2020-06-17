import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy,
} from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import {
  selectSuggestions,
  ILocationSuggestion,
} from '../../store/location/location.reducer';
import { debounceTime, takeUntil } from 'rxjs/operators';
import {
  GetLocations,
  SelectLocation,
} from 'src/app/store/location/location.actions';

@Component({
  selector: 'we-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationComponent implements OnInit, OnDestroy {
  suggestions$: Observable<ILocationSuggestion[]>;
  searchLocationForm: FormGroup;
  private _unsubscribe$ = new Subject<void>();

  constructor(private store: Store) {
    this.suggestions$ = store.pipe(select(selectSuggestions));
    this.searchLocationForm = new FormGroup({
      search: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.searchLocationForm
      .get('search')
      .valueChanges.pipe(        
        debounceTime(500),
        takeUntil(this._unsubscribe$)
      )
      .subscribe((value: string | ILocationSuggestion) => {
        value &&
          typeof value === 'string' &&
          this.store.dispatch(new GetLocations(value));
      });
  }

  selectLocation(selected) {
    const {
      longitude,
      latitude,
      placeId,
      displayName: name,
    } = selected.option.value;

    this.store.dispatch(
      new SelectLocation({ longitude, latitude, placeId, name })
    );
  }

  displayName(value: ILocationSuggestion) {
    return value ? value.displayName : '';
  }

  ngOnDestroy() {
    this._unsubscribe$.next();
    this._unsubscribe$.complete();
  }
}
