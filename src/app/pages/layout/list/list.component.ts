import { Component } from '@angular/core';
import { NbLayoutScrollService } from '@nebular/theme';
import { TinyMceService } from 'app/@core/utils';
import { componentes, fruits } from './fruits-list';

@Component({
  selector: 'ngx-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.scss'],
})
export class ListComponent {
  fruits = fruits;
  componentes = componentes;


  users: { name: string, title: string }[] = [
    { name: 'Carla Espinosa', title: 'Nurse' },
    { name: 'Bob Kelso', title: 'Doctor of Medicine' },
    { name: 'Janitor', title: 'Janitor' },
    { name: 'Perry Cox', title: 'Doctor of Medicine' },
    { name: 'Ben Sullivan', title: 'Carpenter and photographer' },
  ];

  
  constructor(private scrollService: NbLayoutScrollService,
              public tinyMceService: TinyMceService ) {

  }
  
  
}
