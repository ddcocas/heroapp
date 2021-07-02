import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/model/hero';
import { HeroService } from 'src/app/services/hero/hero.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-createhero',
  templateUrl: './createhero.component.html',
  styleUrls: ['./createhero.component.css']
})
export class CreateheroComponent implements OnInit {
  form!: FormGroup;
  data?: Hero;
  
  constructor(private heroService: HeroService,private _snackBar: MatSnackBar,private router: Router,private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createFormFields();
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

  async createHeroe(hero: Hero) {
    if (hero) {
      this.heroService.addHero(hero);
      this.openSnackBar();
      this.router.navigate([""]);
    }
  }

  openSnackBar() {
    this._snackBar.open("Hero created", 'Dismiss', {
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


  emmitData() {
    const controls = this.form.controls;
    if (this.form.invalid) {
      Object.keys(controls).forEach(controlName =>
        controls[controlName].markAsTouched()
      );
      return;
    }
    
    this.heroService.addHero(new Hero(0,controls.name.value,controls.creator.value));
    this.openSnackBar();
    this.navigateback();
  }

  navigateback() {
    this.router.navigate([""]);
  }
  private delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
