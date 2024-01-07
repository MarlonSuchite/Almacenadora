import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BranchService } from '../../Service/branch.service';

@Component({
  selector: 'app-branch-list',
  templateUrl: './branch-list.component.html',
  styleUrls: ['./branch-list.component.scss']
})
export class BranchListComponent implements OnInit {
  sucursales!: any[];

  constructor(
    private router: Router,
    private activadteRoute: ActivatedRoute,
    private _branchService: BranchService
  ) {}

  ngOnInit(): void {
    this.sucursales = this._branchService.getBranches();
  }

  goBranch(): void {
    this.router.navigate(['/branches/branch']);
  }

  //add
  goBranchForm(): void {
    this.router.navigate(['/branches/branch-form']);
  }

  //Update
  goBranchFormUpdate(): void {
    this.router.navigate(['/branches/branch-form'], {
      queryParams: { id: 1 }
    });
  }
}
