import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss'],
})
export class PrincipalComponent implements OnInit {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  menuOpen = false;

  constructor(private observer: BreakpointObserver) {}

  ngOnInit(): void {}
  openMenu() {
    if (this.menuOpen) {
      this.sidenav.mode = 'over';
      this.sidenav.close();
      this.menuOpen = false;
    } else {
      this.sidenav.mode = 'side';
      this.sidenav.open();
      this.menuOpen = true;
    }
  }
}
