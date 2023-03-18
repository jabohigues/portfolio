import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  // for window scroll events
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
  scrollIntoPage(href: string) {
    let e = document.getElementById(href);
    let block: ScrollLogicalPosition = 'center';

    if (href == 'divProjects') block = 'start';
    e!.scrollIntoView({
      behavior: 'smooth',
      block: block,
      inline: 'center',
    });

    let nav = document.getElementById('nav');
    if (nav!.className == 'active') this.toggleMenu();
  }
}
