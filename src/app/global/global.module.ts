import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './components/logo/logo.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [
    LogoComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    MainComponent,
  ],
  imports: [CommonModule],
  exports: [
    LogoComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    MainComponent,
  ],
})
export class GlobalModule {}
