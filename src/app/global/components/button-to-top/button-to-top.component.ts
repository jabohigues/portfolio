import { Component, OnInit } from '@angular/core';
import { GlobalFunctions } from '../global.functions';

@Component({
  selector: 'app-button-to-top',
  templateUrl: './button-to-top.component.html',
  styleUrls: ['./button-to-top.component.scss'],
})
export class ButtonToTopComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  // Do the scroll into the view
  scrollIntoPage(href: string) {
    GlobalFunctions.scrollIntoPage(href);
  }
}
