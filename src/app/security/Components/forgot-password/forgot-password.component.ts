import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  orientacion: any = 'horizontal';
  form!: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder
  ) {
    this.buildForm();
  }

  @HostListener('window:resize', ['$event'])
  orientation(event: Event) {
    if (window.innerWidth <= 500) {
      this.orientacion = 'vertical';
    } else if (window.innerWidth > 500) {
      this.orientacion = 'horizontal';
    }
  }

  buildForm(): void {
    this.form = this.fb.group({
      email: ['', [Validators.email, Validators.required]]
    });
  }

  redirection(): void {
    this.router.navigate(['/security/login']);
  }
}
