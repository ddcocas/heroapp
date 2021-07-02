import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Hero } from 'src/app/model/hero';
import { HeroService } from 'src/app/services/hero/hero.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edithero',
  templateUrl: './edithero.component.html',
  styleUrls: ['./edithero.component.css']
})
export class EditheroComponent implements OnInit {
  hero!: Hero;
  heroId!: number;
  form!: FormGroup;
  constructor(private heroService: HeroService,private _snackBar: MatSnackBar,private router: Router,private fb: FormBuilder,private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.heroId = params.id;
      
      this.hero = this.hero = this.heroService.getById(this.heroId) as Hero;
      
      this.createFormFields();
      this.form.controls.name.setValue(this.hero.name);
      this.form.controls.creator.setValue(this.hero.creator);
    });
  }

  private createFormFields() {
    this.form = this.fb.group({
      name: [null, Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50)
      ])],
      creator: [null, Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50)
      ])],
    });
  }  


  updateHero() {
    const controls = this.form.controls;
    if (this.form.invalid) {
      Object.keys(controls).forEach(controlName =>
        controls[controlName].markAsTouched()
      );
      return;
    }
    
    this.heroService.update(new Hero(this.heroId,controls.name.value,controls.creator.value));
    this.openSnackBar();
    this.navigateback();

  }

  navigateback() {
    this.router.navigate([""]);
  }

  openSnackBar() {
    this._snackBar.open("Hero modified", 'Dismiss', {
      duration:3000,
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
    });
  }

  isControlHasError(controlName: string, validationType: string): boolean {
    const control = this.form.controls[controlName];
    if (!control) {
      return false;
    }
    return control.hasError(validationType) && (control.dirty || control.touched);
  }
}
