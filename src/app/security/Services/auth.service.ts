import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {
    //Hola
  }

  login(values: any) {
    return console.log(values);
  }
}
