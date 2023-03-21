import { Component, OnInit, HostListener } from '@angular/core';
import { GlobalFunctions } from '../global.functions';
import { GlobalVariables } from '../global.variables';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  homeInView: boolean = false;
  projectsInView: boolean = false;
  habilitiesInView: boolean = false;
  tecnologiesInView: boolean = false;
  aboutInView: boolean = false;
  contactInView: boolean = false;

  @HostListener('window:scroll', []) onWindowScroll() {
    let posTopView = window.scrollY;
    // let posButView = posTopView + window.innerHeight;
    console.log(posTopView);
    if (posTopView < GlobalFunctions.getTopProjects()) {
      this.homeInView = !this.homeInView;
    } else if (posTopView < GlobalFunctions.getTopHabilities()) {
      this.projectsInView = !this.projectsInView;
    } else if (posTopView < GlobalFunctions.getTopTecnologies()) {
      this.habilitiesInView = !this.habilitiesInView;
    } else if (posTopView < GlobalFunctions.getTopAbout()) {
      this.tecnologiesInView = !this.tecnologiesInView;
    } else if (posTopView < GlobalFunctions.getTopContact()) {
      this.aboutInView = !this.aboutInView;
    } else if (posTopView > GlobalFunctions.getTopContact()) {
      this.contactInView = !this.contactInView;
    }

    //  let elemTop = elem.offsetTop;
    //  let elemBottom = elemTop + elem.offsetHeight;
    //  return (
    //    (elemBottom < posButView && elemBottom > posTopView) ||
    //    (elemTop > posTopView && elemTop < posButView)
    //  );
  }

  constructor() {}

  ngOnInit(): void {}

  // Show or hide nav and divBack
  toggleMenu() {
    GlobalFunctions.toggleMenu();
  }

  // Do active link of menu
  linkMenuActive(href: string) {
    GlobalFunctions.linkMenuActive(href);
  }

  // Do the scroll into the view
  scrollIntoPage(href: string) {
    GlobalFunctions.scrollIntoPage(href, false);
  }
}
