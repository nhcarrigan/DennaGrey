import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  let compiled: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  beforeEach(() => {});

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the expected texts', () => {
    const texts = compiled.querySelectorAll('p');
    expect(texts[0].innerText.trim()).toBe('© 2021 Denna Grey');
    expect(texts[1].innerText.trim()).toBe(
      'Made with love by Naomi Carrigan'
    );
    expect(texts[2].innerText.trim()).toBe('View Source Code');
  });

  it('should render the expected links', () => {
    const links = compiled.querySelectorAll('a');
    expect(links[0].getAttribute('href')).toBe('https://www.nhcarrigan.com');
    expect(links[1].getAttribute('href')).toBe(
      'https://github.com/nhcarrigan/dennagrey'
    );
  });
});
