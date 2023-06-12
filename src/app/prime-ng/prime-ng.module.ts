import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ChipModule } from 'primeng/chip';
import { CardModule } from 'primeng/card';
import { ToastModule } from 'primeng/toast';
import { DividerModule } from 'primeng/divider';
import { ImageModule } from 'primeng/image';
import { PaginatorModule } from 'primeng/paginator';
import { CarouselModule } from 'primeng/carousel';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonModule,
    MenubarModule,
    PanelMenuModule,
    ChipModule,
    CardModule,
    ToastModule,
    DividerModule,
    ImageModule,
    PaginatorModule,
    CarouselModule
  ]
})
export class PrimeNgModule { }
