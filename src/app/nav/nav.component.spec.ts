import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavComponent } from './nav.component';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;
  let compiled: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the expected text', () => {
    const texts = compiled.children[0].children;
    expect(texts[0].innerText.trim()).toBe('Denna Grey');
    expect(texts[1].innerText.trim()).toBe('Home');
    expect(texts[2].innerText.trim()).toBe('Gallery');
    expect(texts[3].innerText.trim()).toBe('Discord');
    expect(texts[4].innerText.trim()).toBe('Twitch');
    expect(texts[5].innerText.trim()).toBe('Twitter');
  });

  it('should render the expected links', () => {
    const links = compiled.querySelectorAll('a');
    expect(links[0].getAttribute('routerLink')).toBe('/');
    expect(links[1].getAttribute('routerLink')).toBe('/gallery');
    expect(links[2].getAttribute('href')).toBe('http://discord.dennagrey.com');
    expect(links[3].getAttribute('href')).toBe('https://twitch.tv/dennagrey');
    expect(links[4].getAttribute('href')).toBe('https://twitter.com/greydenna');
  });
});
