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
    let nav = document.getElementById('nav');
    nav!.classList.toggle('active');
    nav!.classList.toggle('notactive');

    let iconMenu = document.getElementById('iconMenu');
    iconMenu!.classList.toggle('active');

    setTimeout(() => {
      nav?.classList.toggle('normal');
    }, 200);

    GlobalVariables.menuActive = !GlobalVariables.menuActive;
  }

  // Do the scroll into the view
  public static scrollIntoPage(href: string, isLogoButton: boolean) {
    let div = document.getElementById(href);
    let top = div!.offsetTop;
    console.log(GlobalVariables.lastLink);

    if (href == 'home') {
      div!.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center',
      });
    } else {
      if (GlobalVariables.lastLink == 'home')
        window.scrollTo({ top: top, behavior: 'smooth' });
      else
        href != 'formContact'
          ? window.scrollTo({ top: top - 50, behavior: 'smooth' })
          : window.scrollTo({ top: top - 70, behavior: 'smooth' });
    }
    // let block: ScrollLogicalPosition = 'center';
    // href == 'divProjects' ? (block = 'start') : '';

    // if (GlobalVariables.firstClickLink) {
    //   console.log('firstclick');
    //   GlobalVariables.firstClickLink = !GlobalVariables.firstClickLink;
    //   href != 'home'
    //     ? href != 'formContact'
    //       ? window.scrollTo({ top: top, behavior: 'smooth' })
    //       : window.scrollTo({ top: top, behavior: 'smooth' })
    //     : '';
    // } else {
    //   console.log('NOfirstclick');
    //   href != 'home'
    //     ? href != 'formContact'
    //       ? window.scrollTo({ top: top - 50, behavior: 'smooth' })
    //       : window.scrollTo({ top: top - 70, behavior: 'smooth' })
    //     : div!.scrollIntoView({
    //         behavior: 'smooth',
    //         block: 'center',
    //         inline: 'center',
    //       });
    // }

    if (GlobalVariables.menuActive) this.toggleMenu();
    this.linkMenuActive(href);
  }
}
