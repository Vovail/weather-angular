import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TendaysComponent } from './tendays.component';

const routes: Routes = [{ path: '', component: TendaysComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TendaysRoutingModule { }
