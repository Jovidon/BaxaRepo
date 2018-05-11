import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { GetdataProvider } from './../../providers/getdata/getdata';

import { HomePage } from './../home/home';
import { NewPage } from './../new/new';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  password : string;
  login : string;
  surname : string;
  name : string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public getdata : GetdataProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  go(){
    this.navCtrl.pop();
   this.navCtrl.push(HomePage);
  }
  home_go(){
    this.navCtrl.pop();
   this.navCtrl.push(NewPage);
  }


  registr(){  
    // this.getdata.registr(this.surname,this.name, this.login,this.password);
    this.navCtrl.setRoot(HomePage);

  }

}
