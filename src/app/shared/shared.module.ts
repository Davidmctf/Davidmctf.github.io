import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent, LayoutComponent, TopbarComponent } from './components';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    LayoutComponent,
    FooterComponent,
    TopbarComponent,
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    AppRoutingModule,
  ],
  exports: [
    LayoutComponent,
    TopbarComponent,
  ],
})
export class SharedModule { }
