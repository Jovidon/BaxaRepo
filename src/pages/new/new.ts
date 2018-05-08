import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-new',
  templateUrl: 'new.html',
})
export class NewPage {
  isSeen : boolean = false;
  teacherRu : any [];
  teacherUz : any [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  

  }

  


  ionViewDidLoad() {
    console.log('ionViewDidLoad NewPage');
  }

  go(){
    this.navCtrl.push('LazyloPage');
  }
  See(){
    this.isSeen = true;
    this.ionViewDidLoad();
  }

  getTeacher(teachId : number){
   return "salom";
  }
}
