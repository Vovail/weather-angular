import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { configMenu, MenuItemConfig } from '../config-menu';
@Component({
  selector: 'we-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MobileMenuComponent implements OnInit {
  public menu: MenuItemConfig[] = configMenu;

  constructor() {}

  ngOnInit(): void {}
}
