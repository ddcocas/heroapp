import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { HerolistComponent } from './components/herolist/herolist.component';
import { CreateheroComponent } from './components/createhero/createhero.component';
import { EditheroComponent } from './components/edithero/edithero.component';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { UppercaseinputDirective } from './directives/uppercaseinput.directive';

@NgModule({
  declarations: [
    AppComponent,
    HerolistComponent,
    CreateheroComponent,
    EditheroComponent,
    ConfirmationDialogComponent,
    UppercaseinputDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgbModule,
    MatTableModule, MatPaginatorModule, MatSortModule,MatFormFieldModule, MatInputModule,MatButtonModule,MatSnackBarModule,MatToolbarModule,MatIconModule,MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
