import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { HomeComponent } from './pages';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    loadChildren: () => import('./pages/pages-routing.module').then(m => m.PagesRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
