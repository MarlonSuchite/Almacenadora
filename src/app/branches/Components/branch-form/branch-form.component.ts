import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BranchService } from '../../Service/branch.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-branch-form',
  templateUrl: './branch-form.component.html',
  styleUrls: ['./branch-form.component.scss']
})
export class BranchFormComponent implements OnInit {
  mode = false;
  form!: FormGroup;
  select: any = [
    { code: 1, description: 'Si' },
    { code: 2, description: 'No' }
  ];
  sucursal: any;

  constructor(
    private location: Location,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private _BranchService: BranchService
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params['id']) {
        this.mode = true;
        this.sucursal = this._BranchService.getBranch(params['id']);
        this.form.setValue({
          name: this.sucursal.name,
          address: this.sucursal.address,
          parking: this.sucursal.parking.code,
          phone: this.sucursal.phone
        });
      }
    });
  }

  buildForm(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      parking: ['', Validators.required],
      phone: ['', Validators.required]
    });
  }

  addBranch(): void {
    const values = {
      name: this.form.get('name')!.value,
      address: this.form.get('address')!.value,
      parking: this.form.get('parking')!.value,
      phone: this.form.get('phone')!.value
    };
    this._BranchService.addBranch(values);
    this.form.reset();
    this.goBack();
  }

  goBack(): void {
    this.location.back();
  }
}
