import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalProjectsComponent } from './components/principal-projects/principal-projects.component';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [PrincipalProjectsComponent],
  imports: [CommonModule, MatCardModule, MatChipsModule, MatDividerModule],
  exports: [PrincipalProjectsComponent],
})
export class ProjectsModule {}
