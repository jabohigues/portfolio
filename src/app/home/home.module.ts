import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalComponent } from './components/principal/principal.component';
import { GlobalModule } from '../global/global.module';
import { WelcomeComponent } from './components/welcome/welcome.component';

@NgModule({
  declarations: [PrincipalComponent, WelcomeComponent],
  imports: [CommonModule, GlobalModule],
})
export class HomeModule {}
