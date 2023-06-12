import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../service';
import { Subject, takeUntil } from 'rxjs';
import { MessageService } from 'primeng/api';
import { MovieDetail, ProductionCompany } from '../../interfaces/movie';

@Component({
  selector: 'app-show-movie',
  templateUrl: './show-movie.component.html',
  styleUrls: ['./show-movie.component.css']
})
export class ShowMovieComponent implements OnInit, OnDestroy {
  private onDestroy$ = new Subject<void>();

  movieId: number = 0;
  movie: MovieDetail = {} as MovieDetail;

  constructor(
    private route: ActivatedRoute,
    private messageServ: MessageService,
    private movieServ: MoviesService
  ) { }

  ngOnInit() {
    this.route.params
      .pipe(takeUntil(this.onDestroy$))
      .subscribe({
        next: (params) => {
          this.movieId = params['id'];
        },
        error: (err) => this.showErrorMessage(err)
      });

    if (this.movieId !== 0) {
      this.movieServ.getMovieDetails(this.movieId)
        .pipe(takeUntil(this.onDestroy$))
        .subscribe({
          next: (response) => {
            console.log(response);
            this.movie = response as MovieDetail;
          },
          error: (err) => this.showErrorMessage(err)
        });
    }
  }

  showErrorMessage(err: Error) {
    console.warn('Error', err);
    this.messageServ.add({ severity: 'error', summary: 'Error request', detail: err.message });
  }

  getImageUrl(path: any) {
    return this.movieServ.getMovieImage(path);
  }

  getClassImgProd(elem:number, index:number) : string {
    var classes = '';
    if(elem % 2 === 0){
      classes = 'col-6';
    }else{
      const ind : number = index+1;
      if(ind === elem){
        classes = 'col-12';
      }else{
        classes = 'col-6';
      }
    }

    if(elem % 3 === 0){
      classes += ' md:col-4';
    }else if(elem % 2 === 0){
      classes += ' md:col-6';
    }

    return classes;
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
