import { Component, OnInit, HostListener } from '@angular/core';
import { GlobalFunctions } from '../global.functions';
import { GlobalVariables } from '../global.variables';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  hiddenWeb = GlobalVariables.hiddenWeb;
  hiddenMobile = GlobalVariables.hiddenMobile;
  
  // Fixed menu on top when do scroll
  @HostListener('window:scroll', ['$event.target'])
  scroll(e: any) {
    let scroll = e.scrollingElement.scrollTop;
    let toolbar = document.getElementById('toolbarNav');
    let iconMenu = document.getElementById('iconMenu');

    if (scroll >= 30) {
      toolbar!.classList.add('navScroll');
      iconMenu!.classList.add('iconMenuScroll');
    } else {
      toolbar!.classList.remove('navScroll');
      iconMenu!.classList.remove('iconMenuScroll');
    }
  }
  constructor() {}

  ngOnInit(): void {}

  // Show or hide nav and divBack
  toggleMenu() {
    GlobalFunctions.toggleMenu();
  }

  // Do the scroll into the view
  scrollIntoPage(href: string) {
    GlobalFunctions.scrollIntoPage(href);
  }
}
