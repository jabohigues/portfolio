import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './components/logo/logo.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [LogoComponent, HeaderComponent, NavComponent, FooterComponent],
  imports: [CommonModule, MatSidenavModule, MatIconModule, MatToolbarModule],
  exports: [LogoComponent, HeaderComponent, NavComponent, FooterComponent],
})
export class GlobalModule {}
