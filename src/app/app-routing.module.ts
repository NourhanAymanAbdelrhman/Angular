import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BranchsComponent} from './components/branchs/branchs.component';
import{ HomeComponent} from './components/home/home.component';
import {ReviewComponent }from './components/review/review.component';
import {DetailsComponent}from './components/details/details.component';
import {NotFoundComponent}from './components/not-found/not-found.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'review',component:ReviewComponent},
  {path:'home/buy/:id',component:DetailsComponent},
  {path:'branchs',component:BranchsComponent},
  {path:'',component:HomeComponent},
  {path:'**',component:NotFoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
