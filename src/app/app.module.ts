import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http'; 
import { HttpClientModule } from '@angular/common/http';
import { GetdataProvider } from './../providers/getdata/getdata';
import { MyApp } from './app.component';
import { SMS } from '@ionic-native/sms';

import { SecureStorage } from '@ionic-native/secure-storage';

//pages 

import { HomePage } from './../pages/home/home';
import { NewPage } from './../pages/new/new';
import { ListPage } from './../pages/list/list'; 
import { LoginPage } from './../pages/login/login'; 
import { SignupPage }  from './../pages/signup/signup';
import { LessonsPage }  from './../pages/lessons/lessons';
import { LanguagePage } from './../pages/language/language';
import { LazyloPage } from './../pages/lazylo/lazylo'; 
import { FullNewPage } from './../pages/full-new/full-new';
import { RenderPage } from './../pages/render/render';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient} from '@angular/common/http';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NewPage,
    ListPage,
    LoginPage,
    SignupPage,
    LessonsPage,
    LanguagePage,
    LazyloPage,
    FullNewPage,
    RenderPage
      
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule,
    TranslateModule.forRoot({
    loader: {
    provide: TranslateLoader,
    useFactory: (createTranslateLoader),
    deps: [HttpClient]
    }
    })
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NewPage,
    ListPage,
    LoginPage,
    SignupPage,
    LessonsPage,
    LanguagePage,
    LazyloPage,
    FullNewPage,
    RenderPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GetdataProvider,
    SMS,
    SecureStorage
  ]
})
export class AppModule {}
export function createTranslateLoader(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
  }