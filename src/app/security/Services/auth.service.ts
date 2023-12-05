import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {
    //Hola
  }

  login(values: any) {
    const data = [values.email, values.password];
    localStorage.setItem('data', data.join());
    return console.log(values);
  }

  newPassword(values: any) {
    return console.log(values);
  }
}
