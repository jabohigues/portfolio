import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-principal-contact',
  templateUrl: './principal-contact.component.html',
  styleUrls: ['./principal-contact.component.scss'],
})
export class PrincipalContactComponent implements OnInit {
  registroForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.registroForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      message: ['', [Validators.required, Validators.maxLength(500)]],
    });
  }

  ngOnInit(): void {}
  mostrar() {
    console.log(this.registroForm.controls['name'].hasError('required'));
  }
}
