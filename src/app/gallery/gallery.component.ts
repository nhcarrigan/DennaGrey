import { Component, OnInit } from '@angular/core';
import { featuredHouses, featuredRooms } from 'src/assets/data/featured';
import { FeaturedSimsInt } from 'src/assets/interfaces/FeaturedSimsInt';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements OnInit {
  public houses: FeaturedSimsInt[] = [];
  public rooms: FeaturedSimsInt[] = [];

  constructor() {}

  ngOnInit(): void {
    this.houses = featuredHouses;
    this.rooms = featuredRooms;
  }
}
