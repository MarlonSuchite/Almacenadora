import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BranchesComponent } from './Components/branches/branches.component';
import { BranchComponent } from './Components/branch/branch.component';
import { BranchListComponent } from './Components/branch-list/branch-list.component';
import { BranchFormComponent } from './Components/branch-form/branch-form.component';

const routes: Routes = [
  {
    path: '',
    component: BranchesComponent,
    children: [
      {
        path: 'branch-list',
        component: BranchListComponent
      },
      {
        path: `branch/:status`,
        component: BranchComponent
      },
      {
        path: 'branch-form',
        component: BranchFormComponent
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BranchesRoutingModule {}
