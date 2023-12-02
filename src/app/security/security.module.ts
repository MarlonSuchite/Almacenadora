import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecurityRoutingModule } from './security-routing.module';
import { LoginComponent } from './Components/login/login.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    SecurityRoutingModule,
    MatInputModule,
    MatFormFieldModule
  ]
})
export class SecurityModule {}
