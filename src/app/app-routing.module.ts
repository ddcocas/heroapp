import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HerolistComponent } from './components/herolist/herolist.component';
import { CreateheroComponent } from './components/createhero/createhero.component';
import { EditheroComponent } from './components/edithero/edithero.component';
const routes: Routes = [
  { path: '', component: HerolistComponent, pathMatch: 'full' },
  { path: 'createhero', component: CreateheroComponent },
  { path: 'edit/:id', component: EditheroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
