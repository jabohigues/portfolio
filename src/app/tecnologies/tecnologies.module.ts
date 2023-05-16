import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalTecnologiesComponent } from './components/principal-tecnologies/principal-tecnologies.component';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [PrincipalTecnologiesComponent],
  imports: [CommonModule, MatCardModule, MatTooltipModule],
  exports: [PrincipalTecnologiesComponent],
})
export class TecnologiesModule {}
