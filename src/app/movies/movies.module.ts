import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent, MainComponent, ShowMovieComponent } from './pages';
import { MoviesRoutingModule } from './movies-routing.module';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { SharedModule } from '../shared/shared.module';
import { CardMovieComponent, CarouselMoviesComponent } from './components';
import { MessageService } from 'primeng/api';



@NgModule({
  declarations: [
    HomeComponent,
    ShowMovieComponent,
    MainComponent,
    CardMovieComponent,
    CarouselMoviesComponent,
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    PrimeNgModule,
    SharedModule
  ],
  providers: [
    MessageService
  ]
})
export class MoviesModule { }
