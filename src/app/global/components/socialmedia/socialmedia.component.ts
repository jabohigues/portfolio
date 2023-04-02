import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-socialmedia',
  templateUrl: './socialmedia.component.html',
  styleUrls: ['./socialmedia.component.scss'],
})
export class SocialmediaComponent implements OnInit {
  @Input() isMenu: boolean = false;
  svglinkedin: string = '';
  svggithub: string = '';

  constructor() {}

  ngOnInit(): void {
    if (this.isMenu) {
      this.svggithub = '_menu';
      this.svglinkedin = '_menu';
    }
  }
}
