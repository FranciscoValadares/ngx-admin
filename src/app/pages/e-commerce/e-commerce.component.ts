import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { DataService } from 'app/@core/utils';
import { Globals } from 'globals';
import { PagerComponent } from 'ng2-smart-table/lib/components/pager/pager.component';
import { PAGES_COMPONENTS } from '../pages.module';

@Component({
  selector: 'ngx-ecommerce',
  templateUrl: './e-commerce.component.html',
})
export class ECommerceComponent {

  constructor( private _dataService: DataService ) {
  }

 
  public addPrimeiroItemMenu() { 
    Globals.tipoMenu = 'primeiro';
    this._dataService.shareData = "primeiro";
    this._dataService.getItemsDoMenu();

  }
  public addSegundoItemMenu() { 
    Globals.tipoMenu = 'segundo'; 
    this._dataService.shareData = "segundo";
    this._dataService.getItemsDoMenu();
  }
  public restartItemMenu() { 
    this._dataService.shareData = undefined;
    this._dataService.restartItemMenu();
  }
  

}
