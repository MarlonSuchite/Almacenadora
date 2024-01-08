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
      storage: 5,
      phone: 12341234
    },
    {
      id: 834524312312312,
      name: 'Celasa',
      address: 'Colonia los anded',
      status: false,
      storage: 5,
      phone: 12341234
    },
    {
      id: 123123123134524,
      name: 'USA',
      address: 'Colonia los anded',
      status: true,
      storage: 5,
      phone: 12341234
    },
    {
      id: 643123123124324,
      name: 'FICOSA',
      address: 'Colonia los anded',
      status: false,
      storage: 5,
      phone: 12341234
    }
  ];

  sucursal = {
    id: 736457356312312,
    name: 'Ander',
    address: 'Colonia los anded',
    status: true,
    storage: 5,
    phone: 12341234,
    parking: {
      code: 2,
      description: 'No'
    }
  };

  constructor() {
    //Constructor
  }

  getBranches() {
    return this.sucursales;
  }

  addBranch(values: any) {
    return console.log(values);
  }

  getBranch(id: any) {
    return this.sucursal;
  }
}
