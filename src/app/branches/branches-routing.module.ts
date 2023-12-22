import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BranchesComponent } from './Components/branches/branches.component';

const routes: Routes = [
  {
    path: '',
    component: BranchesComponent
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BranchesRoutingModule {}
