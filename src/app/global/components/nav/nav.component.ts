import { Component, HostListener, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MenuState } from 'src/app/core/models/menustate.interface';
import { toggleMenuActive } from 'src/app/state/actions/menustate.actions';
import { selectMenuActive } from 'src/app/state/selectors/menustate.selector';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  activemenu$: Observable<MenuState> = new Observable<MenuState>();

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
  constructor(private store: Store<any>) {}

  ngOnInit(): void {}

  // Show or hide nav and divBack
  toggleMenu() {
    console.log('hola button menu');
    this.store.dispatch(toggleMenuActive());
    this.activemenu$ = this.store.select(selectMenuActive);
    this.activemenu$.forEach((vale) => {
      console.log(vale);
    });

    // let divBack = document.getElementById('divBack');
    // divBack!.classList.toggle('active');
    // let nav = document.getElementById('nav');
    // nav!.classList.toggle('active');
    // nav!.classList.toggle('notactive');

    // let iconMenu = document.getElementById('iconMenu');
    // iconMenu!.classList.toggle('active');

    // setTimeout(() => {
    //   nav?.classList.toggle('normal');
    // }, 200);
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
