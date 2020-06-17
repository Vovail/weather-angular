import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { reducers } from './store';
import { environment } from '../environments/environment';
import { MobileMenuComponent } from './components/menu/mobile-menu/mobile-menu.component';
import { DesktopMenuComponent } from './components/menu/desktop-menu/desktop-menu.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { TodayComponent } from './today/today.component';
import { LocationComponent } from './components/location/location.component';
import { LocationsEffects } from './store/location/location.effects';
import { LocationService } from './services/location.service';

@NgModule({
  declarations: [
    AppComponent,
    MobileMenuComponent,
    DesktopMenuComponent,
    ToolbarComponent,
    TodayComponent,
    LocationComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    BrowserAnimationsModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([LocationsEffects]),
    ReactiveFormsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [LocationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
