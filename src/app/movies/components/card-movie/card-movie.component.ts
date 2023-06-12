import { Component, Input, OnDestroy } from '@angular/core';
import { MovieDataGeneral } from '../../interfaces/movie';
import { MoviesService } from '../../service';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.css']
})
export class CardMovieComponent implements OnDestroy{
  @Input() movie : MovieDataGeneral = {} as MovieDataGeneral;

  private onDestroy$ = new Subject<void>();

  urlImg = 'assets/img/image-unavailable.png';

  constructor(
    private router: Router,
    private movieServ : MoviesService
    ){}

  ngOnChanges(): void {
    this.urlImg = this.movieServ.getMovieImage(this.movie.backdrop_path);
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  onImageError(event:any){
    this.urlImg = 'assets/img/image-unavailable.png';
  }

  showDetailsMovies(movieId:number){
    this.router.navigateByUrl('show/movie/'+movieId);
  }
}
