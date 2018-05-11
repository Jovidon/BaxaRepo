import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GetdataProvider} from './../../providers/getdata/getdata';
import { HttpClient } from '@angular/common/http';
import { SignupPage } from '../signup/signup';
import { NewPage } from '../new/new';
import { LessonsPage } from '../lessons/lessons';
import { ListPage } from '../list/list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  users: any;
  serverdata : any;
  info : string;
  infosurname : string;
  text : string;
  
  constructor(public http: HttpClient, public navCtrl: NavController, public getdata: GetdataProvider) {
  
   this.getUsers();
   
  }

  getUsers() {
    this.getdata.getUsers()
    .then(data => {
      this.users = data;
      console.log(this.users);
    });
  }

  Post(){
 
        this.getdata.submit(this.info, this.infosurname);
  }


reg(){
   this.navCtrl.push(SignupPage);
   
}

go () {
  this.navCtrl.push(HomePage);
}
help() {
  this.navCtrl.push(ListPage);
}
news() {
  this.navCtrl.push(NewPage);
}
lessons() {
  this.navCtrl.push(LessonsPage);
}

  



}
