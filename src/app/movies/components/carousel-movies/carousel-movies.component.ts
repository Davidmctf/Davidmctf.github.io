import { Component, Input } from '@angular/core';
import { MovieDataGeneral } from '../../interfaces/movie';
import { Router } from '@angular/router';
import { MoviesService } from '../../service';

@Component({
  selector: 'app-carousel-movies',
  templateUrl: './carousel-movies.component.html',
  styleUrls: ['./carousel-movies.component.css']
})
export class CarouselMoviesComponent {
  @Input('movies') movies: MovieDataGeneral[] = [];
  responsiveOptions: any[] = [];

  constructor(
    private router: Router,
    private movieServ : MoviesService
  ) {
    this.responsiveOptions = [
      {
        breakpoint: '1400px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '1220px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '1100px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  getImg(img: MovieDataGeneral) {
    return this.movieServ.getMovieImage(img.backdrop_path);
  }

  onImageError(img: MovieDataGeneral) {
    this.getImg(img);
  }

  onShowImh(movie: MovieDataGeneral) {
    this.router.navigateByUrl('show/movie/'+movie.id);
  }
}
