import { Component, HostListener, OnInit } from '@angular/core';
import { GlobalVariables } from 'src/app/global/components/global.variables';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss'],
})
export class PrincipalComponent implements OnInit {
  hiddenWeb = GlobalVariables.hiddenWeb;
  hiddenMobile = GlobalVariables.hiddenMobile;
  
  @HostListener('window:resize', []) onWindowResize() {
    this.getScreenSize()
  }

  constructor() {}

  ngOnInit(): void {
    this.getScreenSize();
  }

  getScreenSize(){
    if (screen.width >= 500) {
      GlobalVariables.hiddenWeb.isweb = true;
      GlobalVariables.hiddenWeb.hidden = false;
      GlobalVariables.hiddenMobile.ismobile = false;
      GlobalVariables.hiddenMobile.hidden = true;
    } else {
      GlobalVariables.hiddenWeb.isweb = false;
      GlobalVariables.hiddenWeb.hidden = true;
      GlobalVariables.hiddenMobile.ismobile = true;
      GlobalVariables.hiddenMobile.hidden = false;
    }
  }

  // Show or hide nav and divBack
  toggleMenu() {
    let divBack = document.getElementById('divBack');
    divBack!.classList.toggle('active');

    let nav = document.querySelectorAll('.nav:not(.hiddenNav)')[0];
    nav!.classList.toggle('active');
    nav!.classList.toggle('notactive');

    let iconMenu = document.getElementById('iconMenu');
    iconMenu!.classList.toggle('active');

    setTimeout(() => {
      nav?.classList.toggle('normal');
    }, 200);

    GlobalVariables.menuActive = false;
  }
}
