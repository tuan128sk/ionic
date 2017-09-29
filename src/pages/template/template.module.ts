import { createPageComponent } from './template.createPageComponent';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TemplatePage } from './template';

@NgModule({
  declarations: [
    TemplatePage,
    createPageComponent
  ],
  imports: [
    IonicPageModule.forChild(TemplatePage)
  ],
  exports: [
    createPageComponent
  ]
})
export class TemplatePageModule {

}
