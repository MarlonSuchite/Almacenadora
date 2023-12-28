import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.scss']
})
export class BranchesComponent {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
}
