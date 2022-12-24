import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalTecnologiesComponent } from './components/principal-tecnologies/principal-tecnologies.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [PrincipalTecnologiesComponent],
  imports: [CommonModule, MatCardModule],
  exports: [PrincipalTecnologiesComponent],
})
export class TecnologiesModule {}
