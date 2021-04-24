import { Injectable } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { MENU_ITEMS } from 'app/pages/pages-menu';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  BKP_MENU_ITEMS: NbMenuItem[] = MENU_ITEMS.slice();
  //BKP_MENU_ITEMS: NbMenuItem[];

  isSidebarActivated = false;

  shareData: String;
  itemsDoMenu: NbMenuItem[];
  primeiroMenuItem: NbMenuItem = {
    title: 'Primeiros Menus',
    icon: 'shopping-cart-outline',
    link: '/pages/dashboard',
    home: true,
  }
  segundoMenuItem: NbMenuItem = {
    title: 'Segundos Menus',
    icon: 'home-outline',
    link: '/pages/iot-dashboard',
      home: true,
  }

  constructor() { 
    //this.BKP_MENU_ITEMS = MENU_ITEMS;
  }


  setIsSidebarActivated(situacao: boolean){
    this.isSidebarActivated = situacao;
  }

  getIsSidebarActivated(): boolean{
    return this.isSidebarActivated;
  }
 
  getItemsDoMenu() {
   // if (this.shareData === null || this.shareData === '' || this.shareData === undefined) {
   //   MENU_ITEMS.splice(MENU_ITEMS.values());
   // }

    if ((this.shareData === 'primeiro')) {
      this.removeElementsOfMENU_ITEMS();
      MENU_ITEMS[0] = this.primeiroMenuItem;
    }

    if (this.shareData === 'segundo') {
      this.removeElementsOfMENU_ITEMS();
      MENU_ITEMS[0] = this.segundoMenuItem;
    }
     
  }

  removeElementsOfMENU_ITEMS(): void {
    
    var quantidade = MENU_ITEMS.length
    for (let index = 0; index < quantidade; index++) {
      MENU_ITEMS.shift();      
    }
  }

  
  restartItemMenu(): void {
    var quantidade = this.BKP_MENU_ITEMS.length
    for (let index = 0; index < quantidade; index++) {
      MENU_ITEMS[index] = this.BKP_MENU_ITEMS[index];
    }
  }

}
