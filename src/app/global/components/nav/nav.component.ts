import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  currentPosition = window.scrollY;
  @HostListener('window:scroll', ['$event.target']) // for window scroll events
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

  toggleMenu() {
    let divBack = document.getElementById('divBack');
    divBack?.classList.toggle('active');
    let nav = document.getElementById('nav');
    nav?.classList.toggle('active');
    nav?.classList.toggle('notactive');
    setTimeout(() => {
      nav?.classList.toggle('normal');
    }, 200);
  }
}
