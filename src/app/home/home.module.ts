import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalComponent } from './components/principal/principal.component';
import { GlobalModule } from '../global/global.module';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [PrincipalComponent, WelcomeComponent],
  imports: [
    CommonModule,
    GlobalModule,
    NgxTypedJsModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
  ],
})
export class HomeModule {}
