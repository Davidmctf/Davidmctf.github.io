import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselMoviesComponent } from './carousel-movies.component';

describe('CarouselMoviesComponent', () => {
  let component: CarouselMoviesComponent;
  let fixture: ComponentFixture<CarouselMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselMoviesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
