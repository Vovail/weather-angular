import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'we-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodayComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
