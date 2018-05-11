import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//db

import { getRepository, Repository } from 'typeorm';
import { UserRepository } from './../../enteties/user';
import { NewPage } from '../new/new';

@IonicPage()
@Component({
  selector: 'page-lazylo',
  templateUrl: 'lazylo.html',
})
export class LazyloPage {

  users: any;
  user ;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.getAll();
    this.user = this.navParams.get('isUser');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LazyloPage');
  }

  
 async getAll(){
  let repo = getRepository('userrepository') as Repository<UserRepository>;

   this.users = await repo.find(); 
}

goToNews(){
  this.navCtrl.push(NewPage);
}




}
