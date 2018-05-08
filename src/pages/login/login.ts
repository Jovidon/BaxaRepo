import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GetdataProvider } from './../../providers/getdata/getdata'
import { HomePage } from './../home/home';
import { SignupPage } from './../signup/signup';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  password : string;
  login : string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public getdata : GetdataProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  LogIn(){
    this.getdata.submit(this.login, this.password);
    this.navCtrl.setRoot(HomePage);
  }
  
  goToSignUp(){
    this.navCtrl.push(SignupPage);
  }

}
