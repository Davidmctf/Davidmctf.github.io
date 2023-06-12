import { Component, OnDestroy, OnInit } from '@angular/core';
import { MoviesService } from '../../service';
import { Subject, takeUntil } from 'rxjs';
import { MovieDataGeneral } from '../../interfaces/movie';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy{
  private onDestroy$ = new Subject<void>();

  movies      : MovieDataGeneral[] = [];
  top12Movies : MovieDataGeneral[] = [];

  totalPages      : number = 0;
  actualPage      : number = 1;
  firstPageHeader : number = 0;
  firstPageFooter : number = 0;

  //responsiveOptions : any[] = [];

  constructor(
    private movieServ: MoviesService,
    private messageServ: MessageService,
  ){}

  ngOnInit(): void {
      this.getMovies(this.actualPage);
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  getMovies(page : number){
    this.movieServ.getMovies(page)
        .pipe(takeUntil(this.onDestroy$))
        .subscribe({
          next: (response) => {
            if(response.status_code !== undefined && response.status_code !== null) return this.messageServ.add({ severity: 'error', summary: 'Error request', detail: response.status_message });
            this.actualPage = response.page;
            this.totalPages = response.total_pages;
            this.movies = response.results.map((data:any) => {
              return {
                adult:             data.adult,
                backdrop_path:     data.backdrop_path,
                genre_ids:         data.genre_ids as number[],
                id:                data.id,
                original_language: data.original_language,
                original_title:    data.original_title,
                overview:          data.overview,
                popularity:        data.popularity,
                poster_path:       data.poster_path,
                release_date:      data.release_date,
                title:             data.title,
                video:             data.video,
                vote_average:      data.vote_average,
                vote_count:        data.vote_count
              } as MovieDataGeneral;
            });

            if(response.page === 1){
              this.top12Movies = structuredClone(this.movies).sort((a:any, b:any)  => {
                var x = parseFloat(a.vote_average); var y = parseFloat(b.vote_average);
                return ((x > y) ? -1 : ((x < y) ? 1 : 0));
              }).slice(0, 12) as MovieDataGeneral[];
            }
          },
          error: (err: any) => {
            console.warn('Error',err);
            this.messageServ.add({ severity: 'error', summary: 'Error request', detail: err.message });
          }
        });
  }

  onPageChange(event:any){
    this.getMovies(parseInt(event.page)+1);
    this.firstPageHeader = parseInt(event.page);
    this.firstPageFooter = parseInt(event.page);
  }

  getImgUrl(img:string){
    return this.movieServ.getMovieImage(img);
  }
}
