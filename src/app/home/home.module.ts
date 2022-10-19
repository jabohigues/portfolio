import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalComponent } from './components/principal/principal.component';
import { GlobalModule } from '../global/global.module';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { NgxTypedJsModule } from 'ngx-typed-js';

@NgModule({
  declarations: [PrincipalComponent, WelcomeComponent],
  imports: [CommonModule, GlobalModule, NgxTypedJsModule],
})
export class HomeModule {}
