import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-to-top',
  templateUrl: './button-to-top.component.html',
  styleUrls: ['./button-to-top.component.scss'],
})
export class ButtonToTopComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
