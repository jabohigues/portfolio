import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  whiteImages: boolean = true;
  svglinkedin: string = '';
  svggithub: string = '';

  constructor() {}

  ngOnInit(): void {
    if (this.whiteImages) {
      this.svggithub = '_white';
      this.svglinkedin = '_white';
    }
  }
}
