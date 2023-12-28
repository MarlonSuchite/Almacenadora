import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BranchesRoutingModule } from './branches-routing.module';
import { BranchesComponent } from './Components/branches/branches.component';
import { BranchComponent } from './Components/branch/branch.component';
import { BranchListComponent } from './Components/branch-list/branch-list.component';

@NgModule({
  declarations: [BranchesComponent, BranchComponent, BranchListComponent],
  imports: [CommonModule, BranchesRoutingModule]
})
export class BranchesModule {}
