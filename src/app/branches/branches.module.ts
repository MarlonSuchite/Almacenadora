import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BranchesRoutingModule } from './branches-routing.module';
import { BranchesComponent } from './Components/branches/branches.component';
import { BranchComponent } from './Components/branch/branch.component';
import { BranchListComponent } from './Components/branch-list/branch-list.component';
import { WarehousesComponent } from './Components/warehouses/warehouses.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { BranchFormComponent } from './Components/branch-form/branch-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    BranchesComponent,
    BranchComponent,
    BranchListComponent,
    WarehousesComponent,
    BranchFormComponent
  ],
  imports: [
    CommonModule,
    BranchesRoutingModule,
    MatPaginatorModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class BranchesModule {}
