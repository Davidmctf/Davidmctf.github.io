import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent, ShowMovieComponent } from './index';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'show/movie/:id', component: ShowMovieComponent},

  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
