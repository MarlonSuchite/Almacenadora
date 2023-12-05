import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from '@angular/forms';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  orientacion: any = 'horizontal';
  email = new FormControl('', [Validators.email, Validators.required]);
  form!: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private _authService: AuthService
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
      code: ['', [Validators.required]],
      newPassword: ['', [Validators.required]],
      confirm: ['', [Validators.required]]
    });
  }

  redirection(): void {
    this.router.navigate(['/security/login']);
  }

  sendNewPassword(): void {
    const values = {
      code: this.form.controls['code'].value,
      newPassword: this.form.controls['newPassword'].value,
      confirmPassword: this.form.controls['confirm'].value
    };

    this._authService.newPassword(values);
  }
}
