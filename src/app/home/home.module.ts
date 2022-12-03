import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalComponent } from './components/principal/principal.component';
import { GlobalModule } from '../global/global.module';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { MatIconModule } from '@angular/material/icon';
import { AboutModule } from '../about/about.module';

@NgModule({
  declarations: [PrincipalComponent, WelcomeComponent],
  imports: [CommonModule, GlobalModule, MatIconModule, AboutModule],
})
export class HomeModule {}
