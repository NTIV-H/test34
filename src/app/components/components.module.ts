import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EdinButtonComponent} from '../components/edin-button/edin-button.component'



@NgModule({
  declarations: [EdinButtonComponent],
  
  imports: [
    CommonModule
  ]
  ,
  schemas:[NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
  exports:[EdinButtonComponent]
})
export class ComponentsModule { }