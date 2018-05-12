import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TranslateService } from '@ngx-translate/core';


import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from './../pages/login/login'; 
import { NewPage }  from './../pages/new/new';
import { LessonsPage }  from './../pages/lessons/lessons';
import { LanguagePage } from './../pages/language/language';

//DB

import { createConnection } from 'typeorm';
import { getRepository, Repository } from 'typeorm';

import { LanguageRepository } from './../enteties/language';
import { UserRepository } from './../enteties/user';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any ;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public translate : TranslateService) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'NewPage', component: NewPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then( async () => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
     // this.translate.setDefaultLang('ru');

     await createConnection({
      type: 'cordova',
      database: 'test',
      location: 'default',
      logging: ['error', 'query', 'schema'],
      synchronize: true,
      entities: [
        LanguageRepository,
        UserRepository
      ]
    
      });


      let languagerepo = getRepository('languagerepository') as Repository <LanguageRepository>;
      let lang = await languagerepo.findOne({id:1});

      if(lang){
        this.rootPage = HomePage;
      }
      else
       this.rootPage = LoginPage;
        
       this.translate.setDefaultLang(lang.code);
     
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  goToNews(){
    this.nav.setRoot(NewPage);
  }
}
