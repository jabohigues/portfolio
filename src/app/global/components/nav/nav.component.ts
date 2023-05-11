import { Component, OnInit, HostListener, Input } from '@angular/core';
import { GlobalFunctions } from '../global.functions';
import { GlobalVariables } from '../global.variables';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  @Input() hiddenNav: boolean = false;
  
  //Activate link menu when do scroll
  @HostListener('window:scroll', []) onWindowScroll() {
    this.activateLinkInScroll();
  }

  constructor() {}
  
  ngOnInit(): void {
    this.activateLinkInScroll();
  }

  // Show or hide nav and divBack
  toggleMenu() {
    GlobalFunctions.toggleMenu();
  }

  // Do active link of menu
  linkMenuActive(href: string) {
    GlobalFunctions.linkMenuActive(href);
  }

  // Do the scroll into the view
  scrollIntoPage(href: string) {
    GlobalFunctions.scrollIntoPage(href);
  }

  //Activate link menu when do scroll
  activateLinkInScroll() {
    const sections = document.querySelectorAll('section');
    const navLi = document.querySelectorAll('.navContent ul li span');

    let current: string | null = '';

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (scrollY >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });

    navLi.forEach((li) => {
      li.classList.remove('linkActive');
      if (li.classList.contains(current!)) {
        li.classList.add('linkActive');
      }
    });
  }
}
