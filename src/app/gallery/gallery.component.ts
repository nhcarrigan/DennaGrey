import { Component, OnInit } from '@angular/core';
import { featuredSims } from 'src/assets/data/featured';
import { FeaturedSimsInt } from 'src/assets/interfaces/FeaturedSimsInt';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements OnInit {
  public featured: FeaturedSimsInt[] = [];

  constructor() {}

  ngOnInit(): void {
    this.featured = featuredSims;
  }
}
