import { Component, ViewEncapsulation } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectLocationName } from './store/location/location.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  locationName$: Observable<string>;

  constructor(private store: Store) {
    this.locationName$ = store.pipe(select(selectLocationName));
  }
}
