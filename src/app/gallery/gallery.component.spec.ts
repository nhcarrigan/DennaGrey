import { ComponentFixture, TestBed } from '@angular/core/testing';
import { featuredHouses, featuredRooms } from 'src/assets/data/featured';

import { GalleryComponent } from './gallery.component';

describe('GalleryComponent', () => {
  let component: GalleryComponent;
  let fixture: ComponentFixture<GalleryComponent>;
  let compiled: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GalleryComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(GalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  beforeEach(() => {});

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load the gallery data', () => {
    expect(component.houses).toBeDefined();
    expect(component.houses).toEqual(featuredHouses);
    expect(component.rooms).toBeDefined();
    expect(component.rooms).toEqual(featuredRooms);
  });

  it('should render the title', () => {
    const title = compiled.querySelector('h1');
    expect(title.innerText.trim()).toBe('Gallery');
  });

  it('should render the intro text', () => {
    const intro = compiled.querySelector('p');
    expect(intro.innerText.trim()).toBe(
      'These are my featured Sims creations, both houses and rooms.'
    );
  });

  it('should render a featured creation correctly', () => {
    const details = compiled.querySelector('details');
    details.setAttribute('open', 'true');
    fixture.detectChanges();
    const expectedData = featuredHouses[0];
    const firstCreation = compiled.querySelector('.featured');
    const image = firstCreation.querySelector('img');
    const title = firstCreation.querySelector('.title > a');
    const description = firstCreation.querySelector('.description');
    expect(title.innerText.trim()).toBe(expectedData.name);
    expect(title.getAttribute('href')).toBe(expectedData.url);
    expect(image.getAttribute('src').includes(expectedData.image)).toBeTrue();
    expect(description.innerText.trim()).toBe(expectedData.description);
  });

  it('should render all of the featured creations', () => {
    const creations = compiled.querySelectorAll('.featured');
    expect(creations.length).toBe(featuredHouses.length + featuredRooms.length);
  });

  it('should render the link to the gallery', () => {
    const bottomText = compiled.querySelectorAll('p')[1];
    expect(bottomText.innerText.trim()).toBe(
      'View my full collection in the Sims 4 Gallery.'
    );
    expect(bottomText.querySelector('a').getAttribute('href')).toBe(
      'https://www.ea.com/en-gb/games/the-sims/the-sims-4/pc/gallery/browse?category=all&searchtype=ea_origin_id&sortby=downloads&time=all&searchquery=dennagrey&max=50&maxis=false'
    );
  });
});
