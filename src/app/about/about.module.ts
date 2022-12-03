import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalAboutComponent } from './components/principal-about/principal-about.component';

@NgModule({
  declarations: [PrincipalAboutComponent],
  imports: [CommonModule],
  exports: [PrincipalAboutComponent],
})
export class AboutModule {}
