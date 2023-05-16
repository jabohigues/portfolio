import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalHabilitiesComponent } from './components/principal-habilities/principal-habilities.component';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [PrincipalHabilitiesComponent],
  imports: [CommonModule, MatCardModule, MatTooltipModule],
  exports: [PrincipalHabilitiesComponent],
})
export class HabilitiesModule {}
