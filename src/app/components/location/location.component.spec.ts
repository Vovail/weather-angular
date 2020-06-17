import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { LocationComponent } from './location.component';
import { provideMockStore } from '@ngrx/store/testing';

fdescribe('LocationComponent', () => {
  let component: LocationComponent;
  let fixture: ComponentFixture<LocationComponent>;

  beforeEach(async(() => {
    const initialState = {
      location: {
        suggestions: null
      }
    };

    TestBed.configureTestingModule({
      declarations: [LocationComponent],
      imports: [NoopAnimationsModule, MatAutocompleteModule, MatFormFieldModule, MatInputModule],
      providers: [provideMockStore({ initialState })],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
