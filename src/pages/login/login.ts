import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GetdataProvider } from './../../providers/getdata/getdata'
import { HomePage } from './../home/home';
import { SignupPage } from './../signup/signup';
import { TranslateService } from '@ngx-translate/core';

import { LanguageRepository } from './../../enteties/language';
import { getRepository, Repository } from 'typeorm';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  password : string;
  login : string;
  uz="uz";
  ru="ru";

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public getdata : GetdataProvider,
    private translate : TranslateService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  async go(lang){
   
    let languagerepo = getRepository('languagerepository') as Repository <LanguageRepository>;
    let language = new LanguageRepository();
    language.code = lang;
    await languagerepo.save(language);
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
    this.navCtrl.setRoot(HomePage);

  }
}
