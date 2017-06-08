import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { USPage } from './u-s';

@NgModule({
  declarations: [
    USPage,
  ],
  imports: [
    IonicPageModule.forChild(USPage),
  ],
  exports: [
    USPage
  ]
})
export class USPageModule {}
