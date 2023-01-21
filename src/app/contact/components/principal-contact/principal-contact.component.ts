import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-principal-contact',
  templateUrl: './principal-contact.component.html',
  styleUrls: ['./principal-contact.component.scss'],
})
export class PrincipalContactComponent implements OnInit {
  registroForm!: FormGroup;
  isCorrect: any = {
    name: false,
    surname: false,
    email: false,
    phone: false,
    message: false,
  };

  constructor(private formBuilder: FormBuilder) {
    this.registroForm = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      message: ['', [Validators.required, Validators.maxLength(500)]],
    });
  }

  ngOnInit(): void {}
  checkIsCorrect(input: string) {
    if (
      this.registroForm.controls[input].invalid &&
      (this.registroForm.controls[input].dirty ||
        this.registroForm.controls[input].touched)
    ) {
      this.isCorrect[input] = false;
    } else this.isCorrect[input] = true;
  }
}
