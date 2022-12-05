import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalAboutComponent } from './components/principal-about/principal-about.component';
import { MatIconModule } from '@angular/material/icon';
import { DescriptionComponent } from './components/description/description.component';
import { DetailsComponent } from './components/details/details.component';

@NgModule({
  declarations: [
    PrincipalAboutComponent,
    DescriptionComponent,
    DetailsComponent,
  ],
  imports: [CommonModule, MatIconModule],
  exports: [PrincipalAboutComponent],
})
export class AboutModule {}
