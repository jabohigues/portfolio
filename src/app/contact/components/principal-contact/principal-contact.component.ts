import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as confetti from 'canvas-confetti';

@Component({
  selector: 'app-principal-contact',
  templateUrl: './principal-contact.component.html',
  styleUrls: ['./principal-contact.component.scss'],
})
export class PrincipalContactComponent implements OnInit {
  contactForm!: FormGroup;
  isValid: any = {
    name: false,
    email: false,
    message: false,
  };

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private _snackBar: MatSnackBar
  ) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      phone: [],
      email: ['', [Validators.required, this.customEmailValidator]],
      message: ['', [Validators.required, Validators.maxLength(500)]],
    });
  }

  ngOnInit() {}

  customEmailValidator(control: AbstractControl) {
    const email = control.value as string;

    if (email) {
      const atIndex = email.indexOf('@');
      const dotIndex = email.lastIndexOf('.');
      return atIndex > 0 && dotIndex > atIndex && dotIndex < email.length - 2
        ? null
        : { email: true };
    }
    return null;
  }

  checkIsCorrect(input: string) {
    this.isValid[input] = this.contactForm.controls[input].valid;
  }

  submitForm(formDirective: FormGroupDirective) {
    if (this.contactForm.invalid) {
      return;
    }

    const formData = new FormData();
    formData.append('Name', this.contactForm.value.name);
    formData.append('Email', this.contactForm.value.email);
    formData.append('Phone', this.contactForm.value.phone);
    formData.append('Message', this.contactForm.value.message);

    this.http.post('https://formspree.io/f/xbjebnzy', formData).subscribe({
      next: () => {
        // Lógica adicional después de enviar el formulario
        // por ejemplo, mostrar un mensaje de éxito al usuario
        this._snackBar.open('El correo se ha enviado con éxito', 'Gracias', {
          duration: 3000,
          horizontalPosition: 'left',
          panelClass: 'snackbarclass',
          verticalPosition: 'bottom',
        });

        this.startConfetti();

        formDirective.resetForm();
        Object.keys(this.contactForm.controls).forEach((key) => {
          this.checkIsCorrect(key);
        });
      },
      error: (e) => {
        console.log(e);
        let messageError = e.error.errors[0].message;
        this._snackBar.open(messageError, 'Error', {
          duration: 3000,
          horizontalPosition: 'center',
          panelClass: 'snackbarclass',
          verticalPosition: 'bottom',
        });
      },
    });
  }

  startConfetti() {
    confetti.create(undefined, {
      resize: true,
      useWorker: true,
    })({
      shapes: ['square'],
      particleCount: 150,
      spread: 100,
      origin: { x: 0.5, y: 0.8 },
    });
  }
}
