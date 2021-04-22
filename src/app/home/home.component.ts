import { Component, OnInit } from '@angular/core';
import { introText } from 'src/assets/data/intro';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public intro: string[] = [];
  constructor() {}

  ngOnInit(): void {
    this.intro = introText;
  }
}
