import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

import { FormField } from 'app/pages/layout/list/form-field';

@Component({
  selector: 'ngx-dynamic-form-input',
  templateUrl: './dynamic-form-input.component.html',
  styleUrls: ['./dynamic-form-input.component.scss']
})
export class DynamicFormInputComponent{

  @Input() input: FormField<string>;
  @Input() form: FormGroup;

  
  get isValid() { return this.form.controls[this.input.key].valid; }


}
