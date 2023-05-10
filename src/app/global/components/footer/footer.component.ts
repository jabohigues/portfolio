import { Component, OnInit } from '@angular/core';
import { GlobalFunctions } from '../global.functions';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Do the scroll into the view
  scrollIntoPage(href: string) {
    GlobalFunctions.scrollIntoPage(href);
  }

}
