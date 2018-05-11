import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { GetdataProvider} from './../../providers/getdata/getdata';
import { HttpClient } from '@angular/common/http';
import { SignupPage } from '../signup/signup';
import { NewPage } from '../new/new';
import { LessonsPage } from '../lessons/lessons';
import { ListPage } from '../list/list';
import { LazyloPage } from '../lazylo/lazylo';

//db

import { getRepository, Repository } from 'typeorm';
import { UserRepository } from './../../enteties/user';


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
  login : string;
  password : string;
  constructor(
    public http: HttpClient,
     public navCtrl: NavController, 
     public getdata: GetdataProvider,
    public toastCtrl : ToastController) {
  
   this.getUsers();
   this.getAll();
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


 async getAll(){
    let repo = getRepository('userrepository') as Repository<UserRepository>;

     this.users = await repo.find(); 
  }

  async enter(){
    let repo = getRepository('userrepository') as Repository<UserRepository>;
     let isUser =  await repo.findOne({login : this.login});

     if(isUser){
       if(isUser.password == this.password ){
         this.navCtrl.setRoot(LazyloPage , {isUser});
       }
       else
        
       {
         let toast = this.toastCtrl.create({
           message :"Login yoki Parol xato kiritilgan",
           duration : 2000,
           position :'middle',
         });
         toast.present();
       }
     }
     else
     
    {
      let toast = this.toastCtrl.create({
        message :"Login yoki Parol xato kiritilgan",
        duration : 2000,
        position :'middle',
      });
      toast.present();
    }

  }


}
