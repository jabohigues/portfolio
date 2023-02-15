import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import { EmailServiceService } from '../../services/email-service.service';

@Component({
  selector: 'app-principal-contact',
  templateUrl: './principal-contact.component.html',
  styleUrls: ['./principal-contact.component.scss'],
})
export class PrincipalContactComponent implements OnInit {
  contactForm!: FormGroup;
  isCorrect: any = {
    name: false,
    email: false,
    message: false,
  };

  constructor(
    private formBuilder: FormBuilder,
    private emailService: EmailServiceService
  ) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      phone: [],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.maxLength(500)]],
    });
  }

  ngOnInit() {}

  checkIsCorrect(input: string) {
    if (
      this.contactForm.controls[input].invalid &&
      (this.contactForm.controls[input].dirty ||
        this.contactForm.controls[input].touched)
    ) {
      this.isCorrect[input] = false;
    } else this.isCorrect[input] = true;
  }

  onSubmit(formData: any, formContact: FormGroupDirective) {
    console.log(formData);
    this.emailService.sendEmail(formData).subscribe({
      next(response) {
        console.log('Sending email...');
      },
      error(err) {
        console.warn(err.responseText);
        console.log({ err });
      },
      complete() {
        location.href = 'https://mailthis.to/confirm';
        console.log('Email sent successfully !!');
        setTimeout(() => {
          formContact.resetForm();
        }, 200);
      },
    });
  }
}
