import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DynamicFormModule } from './../shared/dynamic-form/dynamic-form.module';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { SurveyRoutingModule } from './survey-routing.module';

@NgModule({
  declarations: [FeedbackComponent, FeedbackFormComponent],
  imports: [
    CommonModule,
    SurveyRoutingModule,
    SharedModule,
    DynamicFormModule
  ]
})
export class SurveyModule { }
