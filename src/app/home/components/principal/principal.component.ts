import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
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

  ngOnInit(): void {
    // $(function () {
    //   $(window).on('scroll', function () {
    //     if ($(window).scrollTop() > 100) {
    //       $('.navscroll').addClass('azul');
    //     } else {
    //       $('.navscroll').removeClass('azul');
    //     }
    //   });
    // });
  }
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

  // @HostListener("scroll", ['$event'])
  // changeNav($event:Event){
  //   let scrollOffset = $event.srcElement['scrollTop'];
  //   console.log("scroll: ", scrollOffset);
  // }}
}
