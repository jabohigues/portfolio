import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalContactComponent } from './components/principal-contact/principal-contact.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PrincipalContactComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  exports: [PrincipalContactComponent],
})
export class ContactModule {}
