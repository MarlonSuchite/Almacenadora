import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form!: FormGroup;
  hide = true;

  constructor(
    private fb: FormBuilder,
    private _authService: AuthService
  ) {
    this.buildForm();
  }

  buildForm(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  login() {
    const datos = {
      email: this.form.get('email')?.value,
      password: this.form.get('password')?.value
    };
    this._authService.login(datos);
  }
}

/* 
  Agregarle OnInit e investigar sobre los ciclos de vida de un componente
*/
