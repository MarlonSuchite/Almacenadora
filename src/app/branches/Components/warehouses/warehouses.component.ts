import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-warehouses',
  templateUrl: './warehouses.component.html',
  styleUrls: ['./warehouses.component.scss']
})
export class WarehousesComponent {
  @Input() bodegas: any = [];
}
