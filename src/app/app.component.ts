import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import * as schema from '../assets/json/schema.json';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'dxchangetest';
  dynamicForm: FormGroup;
  dynamicSchema: any = (schema as any).default.schema;

  showDynamicForm: boolean = false;
  
  constructor(){}


  openDynamicForm(){
    this.showDynamicForm = !this.showDynamicForm;
    let fieldCtrls = {};
    for(let f in this.dynamicSchema.properties) {
      fieldCtrls[f] = new FormControl('', this.dynamicSchema.required.includes(f) ? Validators.required : null)
    }
    this.dynamicForm = new FormGroup(fieldCtrls);
  }

  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.dynamicForm.value, null, 4));
  }

  onReset() {
    // reset whole form back to initial state
    this.dynamicForm.reset();
  }
  

  // compareFn for keyvalue
  originalOrder = (a: KeyValue<number,string>, b: KeyValue<number,string>): number => {
    return 0;
  }
}
