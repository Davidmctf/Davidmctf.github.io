import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Location } from '@angular/common';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent{
  items: MenuItem[] = [
    {
      label: 'Inicio',
      icon: 'pi pi-fw pi-home',
      visible: true,
      command: () => {
        this.router.navigateByUrl('home');
      }
    },
    {
      label: 'Regresar',
      icon: 'pi pi-fw pi-arrow-left',
      visible: false,
      command: () => {
        this.router.navigateByUrl('home');
      }
    }
  ];

  constructor(
    private router: Router,
    private _location: Location,
  ) {
    this._location.onUrlChange((url) => {
      if (url.includes('/show/movie/')) {
        this.items[1].visible = true;
      }else{
        this.items[1].visible = false;
      }
    });
  }
}
