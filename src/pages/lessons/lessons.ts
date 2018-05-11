import { Component } from '@angular/core';
import { GetdataProvider } from './../../providers/getdata/getdata';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
 
 

lessons : any;
title_ru : string [];
title_uz : string [];
content_uz : string [];
content_ru : string [];
type_id : string [];
id : string [];

  constructor(public navCtrl: NavController, public navParams: NavParams,public getdata : GetdataProvider) {
    this.getLess();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LessonsPage');
  }

  makeshort(text){
text=text.substr(0,20);
}

  getLess() {
    this.getdata.getLess()
    .then(data => {
      this.lessons = data;
      console.log(this.lessons);
     
    });
  }
}
