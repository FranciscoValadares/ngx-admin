import { Component, Input, OnInit } from '@angular/core';
import { NbLayoutScrollService } from '@nebular/theme';
import { TinyMceService } from 'app/@core/utils';
import { FormfieldControlService } from 'app/@core/utils/formfield-control.service';
import { Observable } from 'rxjs';
import { FormField } from './form-field';
import { componentes, fruits } from './fruits-list';

@Component({
  selector: 'ngx-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.scss'],
})
export class ListComponent implements OnInit {
  
  fruits = fruits;
  componentes = componentes;
  @Input() formFields: Observable<FormField<string>[]>;
  // @Input() formFields: FormField<string>[] = [];


  users: { name: string, title: string }[] = [
    { name: 'Carla Espinosa', title: 'Nurse' },
    { name: 'Bob Kelso', title: 'Doctor of Medicine' },
    { name: 'Janitor', title: 'Janitor' },
    { name: 'Perry Cox', title: 'Doctor of Medicine' },
    { name: 'Ben Sullivan', title: 'Carpenter and photographer' },
  ];

  
  constructor(private scrollService: NbLayoutScrollService,
              public tinyMceService: TinyMceService,
              public service: FormfieldControlService ) {
            
            this.formFields = this.service.getFormFields();
              
  }

  ngOnInit(): void {
    this.formFields = this.service.getFormFields();
  }
  
  
}
