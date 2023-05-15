import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-socialmedia',
  templateUrl: './socialmedia.component.html',
  styleUrls: ['./socialmedia.component.scss'],
})
export class SocialmediaComponent implements OnInit {
  @Input() whiteImages: boolean = false;
  @Input() homeImages: boolean = false;

  svglinkedin: string = '';
  svggithub: string = '';

  constructor() {}

  ngOnInit(): void {
    console.log(this.whiteImages, this.homeImages);
    
    if (this.whiteImages) {
      this.svggithub = '_white';
      this.svglinkedin = '_white';
    }
  }
}
