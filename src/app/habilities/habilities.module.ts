import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalHabilitiesComponent } from './components/principal-habilities/principal-habilities.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [PrincipalHabilitiesComponent],
  imports: [CommonModule, MatCardModule],
  exports: [PrincipalHabilitiesComponent],
})
export class HabilitiesModule {}
