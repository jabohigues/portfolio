import { GlobalVariables } from './global.variables';

export class GlobalFunctions {
  public static getTopProjects() {
    let div = document.getElementById('divProjects');
    return div!.offsetTop;
  }

  public static getTopHabilities() {
    let div = document.getElementById('divHabilities');
    return div!.offsetTop;
  }

  public static getTopTecnologies() {
    let div = document.getElementById('divTecnologies');
    return div!.offsetTop;
  }

  public static getTopAbout() {
    let div = document.getElementById('aboutSection');
    return div!.offsetTop;
  }

  public static getTopContact() {
    let div = document.getElementById('formContact');
    return div!.offsetTop;
  }

  // Do active link of menu
  public static linkMenuActive(href: string) {
    if (GlobalVariables.lastLink != '') {
      let lastLink = document.getElementById(GlobalVariables.lastLink + 'link');
      lastLink!.classList.toggle('linkActive');
    }

    GlobalVariables.lastLink = href;

    let link = document.getElementById(href + 'link');
    link!.classList.toggle('linkActive');
  }

  // Show or hide nav and divBack
  public static toggleMenu() {
    let divBack = document.getElementById('divBack');
    divBack!.classList.toggle('active');

    let nav = document.querySelectorAll('.nav:not(.hiddenNav)')[0];
    nav.classList.toggle('active');
    nav.classList.toggle('notactive');

    let iconMenu = document.getElementById('iconMenu');
    iconMenu!.classList.toggle('active');

    setTimeout(() => {
      nav?.classList.toggle('normal');
    }, 200);

    GlobalVariables.menuActive = !GlobalVariables.menuActive;
  }

  // Do the scroll into the view
  public static scrollIntoPage(href: string) {
    GlobalVariables.hiddenWeb.isweb
      ? this.scrollWeb(href)
      : this.scrollMobile(href);
  }

  // Special scroll if is formcontact
  public static scrollIfFormContact(href: string, top: number) {
    href != 'formContact'
      ? window.scrollTo({ top: top + 10, behavior: 'smooth' })
      : window.scrollTo({ top: top - 5, behavior: 'smooth' });
  }

  // Scroll if is web
  public static scrollWeb(href: string) {
    let div = document.getElementById(href);

    if (href == 'divProjects') {
      let top = div!.offsetTop;
      window.scrollTo({ top: top - 40, behavior: 'smooth' });
    } else {
      div?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }

    if (GlobalVariables.menuActive) this.toggleMenu();
    this.linkMenuActive(href);
  }

  // Scroll if is mobile
  public static scrollMobile(href: string) {
    let div = document.getElementById(href);
    let top = div!.offsetTop;

    if (href == 'home') window.scrollTo({ top: top - 500, behavior: 'smooth' });
    else {
      if (GlobalVariables.lastLink == 'home')
        this.scrollIfFormContact(href, top);
      else {
        if (GlobalVariables.firstClickLink && scrollY <= 10) {
          GlobalVariables.firstClickLink = !GlobalVariables.firstClickLink;
          this.scrollIfFormContact(href, top);
        } else {
          href != 'formContact'
            ? window.scrollTo({ top: top - 50, behavior: 'smooth' })
            : window.scrollTo({ top: top - 70, behavior: 'smooth' });
        }
      }
    }

    if (GlobalVariables.menuActive) this.toggleMenu();
    this.linkMenuActive(href);
  }
}
