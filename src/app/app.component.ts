import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { EntertainmentPage } from '../pages/entertainment/entertainment';
import { USPage } from '../pages/u-s/u-s';
import { SciencePage } from '../pages/science/science';
import { TechPage } from '../pages/tech/tech';
import { PoliticsPage } from '../pages/politics/politics';
import { WorldPage } from '../pages/world/world';
import { BusinessPage } from '../pages/business/business';

import { MainService } from './app.service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private mainService: MainService) {
    this.initializeApp();

    getNews: void {
    this.news = this.mainService.getNews();
    }
    
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'World', component: WorldPage },
      { title: 'US', component: USPage },
      { title: 'Entertainment', component: EntertainmentPage },
      { title: 'Business', component: BusinessPage },
      { title: 'Tech', component: TechPage },
      { title: 'Politics', component: PoliticsPage },
      { title: 'Science', component: SciencePage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  
}
