import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbMenuItem, NbMenuService, NbSidebarService } from '@nebular/theme';
import { LayoutService } from 'app/@core/utils';
import { DataService } from 'app/@core/utils/data.service';
import { Globals } from 'globals';

import { MENU_ITEMS } from './pages-menu';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu" (click)="hidenToggleSidebar()"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent  {

  menu = MENU_ITEMS;
   
  constructor( private nbMenuService: NbMenuService,
               private _dataService: DataService,
               
               private sidebarService: NbSidebarService,
               private layoutService: LayoutService,
               ) {

  }
 
  hidenToggleSidebar(){
    this.nbMenuService.onItemClick().subscribe((event) => {
      if (event.item.title === 'Modalidades') {
        console.log('Categorias de Exames clicked');
        this.sidebarService.toggle(false, 'menu-sidebar');
        this.layoutService.changeLayoutSize();
      }
    });

  }
}
