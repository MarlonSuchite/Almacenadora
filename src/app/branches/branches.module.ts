import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BranchesRoutingModule } from './branches-routing.module';
import { BranchesComponent } from './Components/branches/branches.component';
import { BranchComponent } from './Components/branch/branch.component';

@NgModule({
  declarations: [BranchesComponent, BranchComponent],
  imports: [CommonModule, BranchesRoutingModule]
})
export class BranchesModule {}
