import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { GetdataProvider } from './../../providers/getdata/getdata';

import { HomePage } from './../home/home';
import { NewPage } from './../new/new';
import { LazyloPage } from './../lazylo/lazylo';

import { getRepository, Repository } from 'typeorm';
import { UserRepository } from './../../enteties/user';

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
  email : string;
  password2 : string;
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


  async registr(){  
    // this.getdata.registr(this.surname,this.name, this.login,this.password);

    let repo = getRepository('userrepository') as Repository<UserRepository>;
    let user = new UserRepository();
    user.name =  this.name;
    user.surname = this.surname;
    user.login = this.login ;
    user.password = this.password;
    user.email = this.email;
    await repo.save(user);
    this.navCtrl.setRoot(HomePage);

  }



}
