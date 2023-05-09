import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  @Input() isMenu: boolean = true;
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
