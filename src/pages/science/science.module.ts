import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SciencePage } from './science';

@NgModule({
  declarations: [
    SciencePage,
  ],
  imports: [
    IonicPageModule.forChild(SciencePage),
  ],
  exports: [
    SciencePage
  ]
})
export class SciencePageModule {}
