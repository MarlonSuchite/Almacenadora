import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-branch-list',
  templateUrl: './branch-list.component.html',
  styleUrls: ['./branch-list.component.scss']
})
export class BranchListComponent {
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

  constructor(private router: Router) {}

  goBranch() {
    this.router.navigate(['/branches/branch']);
  }
}
