import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss'],
})
export class PrincipalComponent implements OnInit {
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
