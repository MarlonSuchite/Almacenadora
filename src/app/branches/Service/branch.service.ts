import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BranchService {
  sucursales: any[] = [
    {
      id: 736457356312312,
      name: 'Ander',
      address: 'Colonia los anded',
      status: true,
      storage: 5
    },
    {
      id: 834524312312312,
      name: 'Celasa',
      address: 'Colonia los anded',
      status: false,
      storage: 5
    },
    {
      id: 123123123134524,
      name: 'USA',
      address: 'Colonia los anded',
      status: true,
      storage: 5
    },
    {
      id: 643123123124324,
      name: 'FICOSA',
      address: 'Colonia los anded',
      status: false,
      storage: 5
    }
  ];

  constructor() {
    //Constructor
  }

  getBranches() {
    return this.sucursales;
  }
}
