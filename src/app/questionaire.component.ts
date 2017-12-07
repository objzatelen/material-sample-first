import { Component, OnInit, Input } from '@angular/core';
import { FORM_DATA } from './form.data';

@Component({ 
  selector: 'questionaire',   
  template: `
    <fieldset>
      <div *ngFor="let question of questions; let i = index">
        <div *ngIf="question.visible" [ngSwitch]="question.controlType" class="switch" >
          <ff-checkbox-group *ngSwitchCase="'checkboxGroup'" [dataProvider]="question.list"></ff-checkbox-group>
          <ff-timerange *ngSwitchCase="'timeRange'" [label]="question.label" [start]="question.start" [end]="question.end"></ff-timerange>
        </div>
      </div>
    </fieldset>
  `
})
export class QuestionnaireComponent {  
  public questions: Array<any> = FORM_DATA;
}