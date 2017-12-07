import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector : 'ff-checkbox-group',
  styles : [` 
    div[fxLayoutAlign] { padding:4px; }
  `],
  template : `
    <div fxLayout="row wrap" fxLayoutAlign="space-around center">
      <div *ngFor="let question of questions; let i = index">
        <md-slide-toggle [id]="question.key" >  {{question.label}} </md-slide-toggle>
      </div>  
    </div>
  `
})
export class CheckboxGroup {
  @Input('dataProvider') questions : Array<any>;
}
      



