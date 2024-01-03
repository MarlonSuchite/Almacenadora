import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  constructor(
    private location: Location,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      console.log('Cambio', params);
    });
  }

  goBack() {
    this.location.back();
  }
}
