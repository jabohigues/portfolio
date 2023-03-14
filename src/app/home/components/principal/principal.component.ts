import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss'],
})
export class PrincipalComponent implements OnInit {
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

    if (href != 'home') {
      let top = e?.offsetTop;
      window.scrollTo({ top: top! - 60, behavior: 'smooth' });
    }

    this.toggleMenu();
  }
}
