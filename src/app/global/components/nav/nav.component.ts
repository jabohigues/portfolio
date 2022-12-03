import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';

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
    if (scroll >= 30) {
      toolbar!.classList.add('navScroll');
    } else {
      toolbar!.classList.remove('navScroll');
    }
  }
  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigate(ruta: string) {
    this.router.navigate([ruta]);
  }

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
