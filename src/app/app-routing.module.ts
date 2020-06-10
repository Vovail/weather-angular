import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodayComponent } from './today/today.component';

const routes: Routes = [
  {
    path: 'hours',
    loadChildren: () =>
      import('./hours/hours.module').then((m) => m.HoursModule),
  },
  {
    path: 'tendays',
    loadChildren: () =>
      import('./tendays/tendays.module').then((m) => m.TendaysModule),
  },
  { path: 'today', component: TodayComponent },
  { path: '**', component: TodayComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
