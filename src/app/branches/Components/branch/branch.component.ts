import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.scss']
})
export class BranchComponent implements OnInit {
  bodegas: any[] = [
    {
      id: 421412341234,
      name: 'Hello',
      description:
        'Es una bodega de tamaño perfecto para que guarde multiples elementos',
      size: '10 X 15',
      address: 'Colonia los anded',
      status: true,
      price: 123
    },
    {
      id: 421412341234,
      name: 'Hello',
      description:
        'Es una bodega de tamaño perfecto para que guarde multiples elementos',
      size: '10 X 15',
      address: 'Colonia los anded',
      status: true,
      price: 123
    },
    {
      id: 421412341234,
      name: 'Hello',
      description:
        'Es una bodega de tamaño perfecto para que guarde multiples elementos',
      size: '10 X 15',
      address: 'Colonia los anded',
      status: true,
      price: 123
    },
    {
      id: 421412341234,
      name: 'Hello',
      description:
        'Es una bodega de tamaño perfecto para que guarde multiples elementos',
      size: '10 X 15',
      address: 'Colonia los anded',
      status: true,
      price: 123
    }
  ];
  totalElements = this.bodegas.length;
  pageSize = 2;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      console.log('Cambio', params);
    });
  }

  goBack() {
    this.router.navigate(['/branches/branch-list']);
  }

  pagination(event: any): void {
    console.log(event);
    this.router.navigate([], {
      queryParams: {
        page: event.pageIndex + 1,
        search: '',
        size: 0,
        sort: ''
      }
    });
  }
}
