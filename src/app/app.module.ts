import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';


import { AppComponent } from './app.component';
import { CustomMaterialModule } from './material.module';

import { QuestionnaireComponent } from './questionaire.component';
import { TimeRange } from './timerange.component';
import { CheckboxGroup } from './checkbox.group.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, FlexLayoutModule, CustomMaterialModule ],
  declarations: [ AppComponent, QuestionnaireComponent, TimeRange, CheckboxGroup ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
