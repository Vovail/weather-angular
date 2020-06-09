import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { configMenu } from '../config-menu';
import { DesktopMenuComponent } from './desktop-menu.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('DesktopMenuComponent', () => {
  let component: DesktopMenuComponent;
  let fixture: ComponentFixture<DesktopMenuComponent>;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DesktopMenuComponent],
      imports: [RouterTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopMenuComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement.nativeElement;
    fixture.detectChanges();    
  });

  it('should create DesktopMenuComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should render menu items', () => {
    const items = element.querySelectorAll('a');
    expect(items.length).toBe(configMenu.length);
  });

  it("should render right menu item's hrefs", () => {
    const items: NodeListOf<HTMLElement> = element.querySelectorAll('a');
    items.forEach((item, i) => {
      expect(item.getAttribute('href')).toBe(configMenu[i].path);
    });
  });

  it("should render right menu item's labels", () => {
    const items: NodeListOf<HTMLElement> = element.querySelectorAll('a');
    items.forEach((item, i) => {
      expect(item.textContent.trim()).toMatch(configMenu[i].label);
    });
  });
});
