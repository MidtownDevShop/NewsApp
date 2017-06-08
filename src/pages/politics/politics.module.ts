import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PoliticsPage } from './politics';

@NgModule({
  declarations: [
    PoliticsPage,
  ],
  imports: [
    IonicPageModule.forChild(PoliticsPage),
  ],
  exports: [
    PoliticsPage
  ]
})
export class PoliticsPageModule {}
