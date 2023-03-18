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

    let main = document.getElementById('main');
    main!.classList.toggle('active');

    setTimeout(() => {
      nav?.classList.toggle('normal');
    }, 200);
  }
}
