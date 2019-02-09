import { Component } from '@angular/core';
import { GetdataProvider } from './../../providers/getdata/getdata';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the LessonsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lessons',
  templateUrl: 'lessons.html',
})

export class LessonsPage {
 param = {role:2, login:"", password: ""};
lessons : any;
title_ru : string [];
title_uz : string [];
content_uz : string [];
content_ru : string [];
type_id : string [];
id : string [];

  constructor(public navCtrl: NavController, public navParams: NavParams,public getdata : GetdataProvider, public toastCtrl: ToastController) {
   //this.getLess();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LessonsPage');
  }

  makeshort(text){
text=text.substr(0,20);
}

  getLess() {
    this.getdata.getNews()
    .then(data => {
      this.lessons = data;
      console.log(this.lessons);
    });
  }

  post(){
    let res;
    this.getdata.postnew(this.param).subscribe((data) =>{
      res = data;
      console.log(res);
      // if(res.length){
      //   let toast = this.toastCtrl.create({
      //     message : "User exists!",
      //     duration : 2000,
      //     position : 'top'
      //   });
      //   toast.present();
      // }
      // else
      //  {
      //   let toast = this.toastCtrl.create({
      //     message : "No user!",
      //     duration : 2000,
      //     position : 'top'
      //   });
      //   toast.present();
      //  }
    })
  }

  getNotice(){
    this.getdata.getNotice().then(data => {
      console.log(data);
    })
  }
}
