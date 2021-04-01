import { ConstantPool } from '@angular/compiler';
import {Component, OnDestroy, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { NbComponentStatus, NbMenuItem, NbMenuService, NbSidebarService, NbThemeService } from '@nebular/theme';
import { NbMenuInternalService } from '@nebular/theme/components/menu/menu.service';
import { DataService } from 'app/@core/utils';
import { constants } from 'buffer';
import { Globals } from 'globals';
import { takeWhile } from 'rxjs/operators' ;
import { SolarData } from '../../@core/data/solar';
import { MENU_ITEMS } from '../pages-menu';
import { PagesComponent } from '../pages.component';

interface CardSettings {
  title: string;
  iconClass: string;
  type: string;
}

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnDestroy {

  statuses: NbComponentStatus[] = [ 'primary', 'success', 'info', 'warning', 'danger' ];
  @ViewChild('my-nb-menu') menu; 

  private alive = true;

  solarValue: number;
  lightCard: CardSettings = {
    title: 'Light',
    iconClass: 'nb-lightbulb',
    type: 'primary',
  };
  rollerShadesCard: CardSettings = {
    title: 'Roller Shades',
    iconClass: 'nb-roller-shades',
    type: 'success',
  };
  wirelessAudioCard: CardSettings = {
    title: 'Wireless Audio',
    iconClass: 'nb-audio',
    type: 'info',
  };
  coffeeMakerCard: CardSettings = {
    title: 'Coffee Maker',
    iconClass: 'nb-coffee-maker',
    type: 'warning',
  };

  statusCards: string;

  commonStatusCardsSet: CardSettings[] = [
    this.lightCard,
    this.rollerShadesCard,
    this.wirelessAudioCard,
    this.coffeeMakerCard,
  ];

  statusCardsByThemes: {
    default: CardSettings[];
    cosmic: CardSettings[];
    corporate: CardSettings[];
    dark: CardSettings[];
  } = {
    default: this.commonStatusCardsSet,
    cosmic: this.commonStatusCardsSet,
    corporate: [
      {
        ...this.lightCard,
        type: 'warning',
      },
      {
        ...this.rollerShadesCard,
        type: 'primary',
      },
      {
        ...this.wirelessAudioCard,
        type: 'danger',
      },
      {
        ...this.coffeeMakerCard,
        type: 'info',
      },
    ],
    dark: this.commonStatusCardsSet,
  };


     
  constructor(private themeService: NbThemeService,
              private solarService: SolarData,
              private _dataService: DataService,
              private sidebarService: NbSidebarService  ) {

    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.statusCards = this.statusCardsByThemes[theme.name];
    });

    this.solarService.getSolarData()
      .pipe(takeWhile(() => this.alive))
      .subscribe((data) => {
        this.solarValue = data;
      });
  }

  ngOnDestroy() {
    this.alive = false;
  }

  public addPrimeiroItemMenu() { 
    this._dataService.shareData = "primeiro";
    this._dataService.getItemsDoMenu();

  }
  public addSegundoItemMenu() { 
    this._dataService.shareData = "segundo";
    this._dataService.getItemsDoMenu();
  }

  public restartItemMenu() { 
    this._dataService.shareData = undefined;
    this._dataService.restartItemMenu();
  }

  toggle() {
    //this.sidebarService.toggle();
  }
 
}
