import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTitleComponent } from './page-title/page-title.component';
import { DynamicFormModule } from './dynamic-form/dynamic-form.module';

@NgModule({
  declarations: [
    PageTitleComponent
  ],
  imports: [
    CommonModule,
    DynamicFormModule
  ],
  exports: [
    PageTitleComponent
  ]
})
export class SharedModule { }
