import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalComponent } from './components/principal/principal.component';
import { GlobalModule } from '../global/global.module';

@NgModule({
  declarations: [PrincipalComponent],
  imports: [CommonModule, GlobalModule],
})
export class HomeModule {}
