import { ComponentFixture, TestBed } from '@angular/core/testing';
import { introText } from 'src/assets/data/intro';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let compiled: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load the intro data', () => {
    expect(component.intro).toBeDefined();
    expect(component.intro).toEqual(introText);
  });

  it('should render the title', () => {
    const title = compiled.querySelector('h1');
    expect(title.innerText.trim()).toBe('Denna Grey');
  })

  it('should render the profile image', () => {
    const image = compiled.querySelector('img');
    expect(image.getAttribute('src')).toBe('../../assets/img/denna.png')
  })

  it('should render the intro data on the page', () => {
    const texts = compiled.querySelectorAll('p');
    introText.forEach((text, index) => {
      expect(texts[index].innerText.trim()).toEqual(text);
    });
  });
});
