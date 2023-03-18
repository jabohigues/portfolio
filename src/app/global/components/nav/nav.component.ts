import { Component, OnInit } from '@angular/core';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  lastLink: string = '';
  constructor() {}

  ngOnInit(): void {}
  // Show or hide nav and divBack
  toggleMenu() {
    let divBack = document.getElementById('divBack');
    divBack!.classList.toggle('active');
    let nav = document.getElementById('nav');
    nav!.classList.toggle('active');
    nav!.classList.toggle('notactive');

    let iconMenu = document.getElementById('iconMenu');
    iconMenu!.classList.toggle('active');

    setTimeout(() => {
      nav?.classList.toggle('normal');
    }, 200);
  }

  // Do the scroll into the view
  scrollIntoPage(event: any, href: string) {
    let div = document.getElementById(href);
    let block: ScrollLogicalPosition = 'center';
    href == 'divProjects' ? (block = 'start') : '';

    div!.scrollIntoView({
      behavior: 'smooth',
      block: block,
      inline: 'center',
    });

    let top = div!.offsetTop;
    href != 'home'
      ? href != 'formContact'
        ? window.scrollTo({ top: top - 50, behavior: 'smooth' })
        : window.scrollTo({ top: top - 70, behavior: 'smooth' })
      : '';

    this.toggleMenu();
    this.linkMenuActive(event, href);
  }

  // Do active link of menu
  linkMenuActive(event: any, href: string) {
    if (this.lastLink != '') {
      let lastLink = document.getElementById(this.lastLink + 'link');
      lastLink!.classList.toggle('linkActive');
    }
    this.lastLink = href;
    let link = document.getElementById(href + 'link');
    link!.classList.toggle('linkActive');
  }
}
