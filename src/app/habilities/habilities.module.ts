import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalHabilitiesComponent } from './components/principal-habilities/principal-habilities.component';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [PrincipalHabilitiesComponent],
  imports: [CommonModule, MatCardModule, MatGridListModule],
  exports: [PrincipalHabilitiesComponent],
})
export class HabilitiesModule {}
