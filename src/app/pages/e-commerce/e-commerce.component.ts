import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { DataService, LayoutService } from 'app/@core/utils';
import { Globals } from 'globals';
import { PagerComponent } from 'ng2-smart-table/lib/components/pager/pager.component';
import { PAGES_COMPONENTS } from '../pages.module';

@Component({
  selector: 'ngx-ecommerce',
  templateUrl: './e-commerce.component.html',
})
export class ECommerceComponent {

  private isSidebarActivated = false;

  constructor( private _dataService: DataService, 
               private sidebarService: NbSidebarService,
               private layoutService: LayoutService, ) {
  }

 
  public addPrimeiroItemMenu() { 
    Globals.tipoMenu = 'primeiro';
    this._dataService.shareData = "primeiro";
    this._dataService.getItemsDoMenu();

    this.showToggleSidebar();
  }
  public addSegundoItemMenu() { 
    Globals.tipoMenu = 'segundo'; 
    this._dataService.shareData = "segundo";
    this._dataService.getItemsDoMenu();

    this.showToggleSidebar();
  }
  public restartItemMenu() { 
    this._dataService.shareData = undefined;
    this._dataService.restartItemMenu();

    this.showToggleSidebar()
  }

  toggle() {
    //this.sidebarService.toggle();
  }
  
  nbCardClick(){
    var teste = "";
  }

  showToggleSidebar(): boolean {

    if(!this._dataService.getIsSidebarActivated()){
      this.sidebarService.toggle(true, 'menu-sidebar');
      this.layoutService.changeLayoutSize();
      this._dataService.setIsSidebarActivated(true);      
    }
    
    return true;
  }

}
