import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.scss']
})
export class BranchesComponent implements OnInit {
  mostrar = true;

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

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.mostrar = true;
    this.activatedRoute.paramMap.subscribe(params => {
      console.log('Hola');
    });
  }

  atras() {
    this.mostrar = !this.mostrar;
    this.router.navigate(['/branches/branch']);
  }

  hola(hola: any) {
    console.log(hola);
    this.mostrar = hola;
  }
}
