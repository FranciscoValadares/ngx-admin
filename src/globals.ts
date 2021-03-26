import { Injectable } from '@angular/core';


enum TipoMenuSideBar {
    Primeiro = 'primeiro',
    Segundo = 'segundo'
}
@Injectable()
export class Globals {
  static tipoMenu: string = 'segundo';
}