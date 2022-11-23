import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  @Output() clickMenu: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigate(ruta: string) {
    this.router.navigate([ruta]);
  }

  passClickMenu() {
    this.clickMenu.emit(true);
  }
}
