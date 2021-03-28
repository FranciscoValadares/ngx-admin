import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormfieldControlService } from 'app/@core/utils/formfield-control.service';
import { FormField } from 'app/pages/layout/list/form-field';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngx-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {

  @Input() formFields: FormField<string>[] = [];
  @Input('formGroup') form: FormGroup;
  payLoad = '';
  
  // @Input('formGroup') form: FormGroup;
  // form: FormGroup;

  constructor(private formfieldService: FormfieldControlService) { 
    
  }

  ngOnInit(): void {
    this.form = this.formfieldService.toFormGroup(this.formFields);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }

}
