import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MobileMenuComponent } from './mobile-menu.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { configMenu } from '../config-menu';

describe('MobileMenuComponent', () => {
  let component: MobileMenuComponent;
  let fixture: ComponentFixture<MobileMenuComponent>;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MobileMenuComponent],
      imports: [
        MatMenuModule,
        MatIconModule,
        RouterTestingModule,
        NoopAnimationsModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileMenuComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create MobileMenuComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should not render menu-list', () => {
    const list: HTMLElement = element.parentNode.querySelector(
      '.weather-mobile-menu-list'
    );

    expect(list).toBeNull();
  });

  it("render right menu item's", async () => {
    const menuButton: HTMLElement = element.querySelector('button');
    menuButton.click();
    const links: NodeListOf<HTMLElement> = element.parentNode.querySelectorAll(
      '.weather-mobile-menu-list a'
    );

    links.forEach((item, i) => {
      expect(item.textContent.trim()).toMatch(configMenu[i].label);
      expect(item.getAttribute('href')).toMatch(configMenu[i].path);
    });
  });
});
