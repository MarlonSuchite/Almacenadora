import { Component } from '@angular/core';

@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.scss']
})
export class BranchesComponent {
  sucursales: any[] = [
    { name: 'Ander', address: 'Colonia los anded', status: true, storage: 5 },
    { name: 'Celasa', address: 'Colonia los anded', status: false, storage: 5 },
    { name: 'USA', address: 'Colonia los anded', status: true, storage: 5 },
    { name: 'FICOSA', address: 'Colonia los anded', status: false, storage: 5 }
  ];
}
