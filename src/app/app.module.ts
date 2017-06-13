import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { EntertainmentPage } from '../pages/entertainment/entertainment';
import { USPage } from '../pages/u-s/u-s';
import { SciencePage } from '../pages/science/science';
import { TechPage } from '../pages/tech/tech';
import { PoliticsPage } from '../pages/politics/politics';
import { WorldPage } from '../pages/world/world';
import { BusinessPage} from '../pages/business/business';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MainService } from './app.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EntertainmentPage,
    USPage,
    SciencePage,
    TechPage,
    PoliticsPage,
    WorldPage,
    BusinessPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    JsonpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EntertainmentPage,
    USPage,
    SciencePage,
    TechPage,
    PoliticsPage,
    WorldPage,
    BusinessPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    MainService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule implements ngOnInit{
    ngOnInit(){
        
    }
}
