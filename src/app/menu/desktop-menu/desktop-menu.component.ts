import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { configMenu, MenuItemConfig } from '../config-menu';

@Component({
  selector: 'we-desktop-menu',
  templateUrl: './desktop-menu.component.html',
  styleUrls: ['./desktop-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DesktopMenuComponent implements OnInit {
  public menu: MenuItemConfig[] = configMenu;
  
  constructor() { }

  ngOnInit(): void {
  }

}
