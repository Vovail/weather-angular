import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TendaysRoutingModule } from './tendays-routing.module';
import { TendaysComponent } from './tendays.component';


@NgModule({
  declarations: [TendaysComponent],
  imports: [
    CommonModule,
    TendaysRoutingModule
  ]
})
export class TendaysModule { }
