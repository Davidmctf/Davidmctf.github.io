import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private baseUrl : string = environment.apiBaseUrl;
  private apiKey  : string = environment.apiKey;
  private headers : HttpHeaders = new HttpHeaders().set('Authorization', 'Bearer ' + this.apiKey);

  constructor(private http: HttpClient) {}

  getMovies(page:number): Observable<any> {
    const url     = `${this.baseUrl}movie/now_playing`;
    const params  = new HttpParams()
                    .set('include_adult', 'true')
                    .set('include_video', 'true')
                    .set('language', 'es-Mx')
                    .set('page', page)
                    .set('sort_by', 'title.asc')
                    .set('release_date.gte', '2023-01-01');

    return this.http.get<any>(url, { params: params, headers:this.headers});
  }

  getMovieDetails(movieId: number): Observable<any> {
    const url = `${this.baseUrl}movie/${movieId}`;
    const params  = new HttpParams().set('language', 'es-Mx');
    return this.http.get<any>(url, { params: params, headers:this.headers});
  }

  getMovieImage(path:any) : string {
    var urlImg = 'assets/img/image-unavailable.png';
    if(path !== undefined && path !== null && path.toString().trim() !== ''){
      urlImg = `https://image.tmdb.org/t/p/w500/${path}`;
    }
    return urlImg;
  }
}
