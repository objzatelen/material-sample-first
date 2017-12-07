import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector : 'ff-timerange',
  styles : [` 
    div[fxLayoutAlign] { padding:10px; padding-left: 25px; padding-top:15px;}
  `],
  template : `
    <div fxLayout="row wrap" fxLayoutAlign="start center" fxLayoutGap="10px">
      <md-form-field>
        <input mdInput [mdDatepicker]="picker1" placeholder="{{label}} From" [id]="start.key" >
        <md-datepicker-toggle mdSuffix [for]="picker1"></md-datepicker-toggle>
        <md-datepicker #picker1></md-datepicker>
      </md-form-field>

      <md-form-field>
        <input mdInput [mdDatepicker]="picker2" placeholder="{{label}} To" [id]="end.key" >
        <md-datepicker-toggle mdSuffix [for]="picker2"></md-datepicker-toggle>
        <md-datepicker #picker2></md-datepicker>
      </md-form-field>

    </div>
  `
})
export class TimeRange {
  @Input() label : string;
  @Input() start : any;
  @Input() end   : any;
}
