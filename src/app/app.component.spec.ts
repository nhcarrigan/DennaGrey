import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let compiled: any;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent, FooterComponent, NavComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'dennagrey'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('dennagrey');
  });

  it('should render the nav component', () => {
    const nav = compiled.querySelector('app-nav');
    expect(nav).toBeDefined();
  });

  it('should render the router outlet', () => {
    const router = compiled.querySelector('router-outlet');
    expect(router).toBeDefined();
  });

  it('should render the footer component', () => {
    const footer = compiled.querySelector('app-footer');
    expect(footer).toBeDefined();
  });

  it('should render the components in order', () => {
    expect(compiled.children[0].tagName).toBe('APP-NAV');
    expect(compiled.children[1].tagName).toBe('ROUTER-OUTLET');
    expect(compiled.children[2].tagName).toBe('APP-FOOTER');
  });
});
