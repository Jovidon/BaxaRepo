import { Component } from '@angular/core';
import { GetdataProvider } from './../../providers/getdata/getdata';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { FullNewPage } from '../full-new/full-new';


@IonicPage()
@Component({
  selector: 'page-new',
  templateUrl: 'new.html',
})
export class NewPage {
  news : any  ;
  title_ru : any [];
  title_uz : any [];
  content_uz : any [];
  content_ru : any [];
  category_id : any [];
  created_date : any [];
  image : any [];
  id : any [];
  uz="uz";
  ru="ru";
  lang : string ;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public getdata : GetdataProvider,
     public translate : TranslateService,) {
    this.getNews();

    this.getCurrentLang();
   

 }
  ionViewDidLoad() {
    console.log('ionViewDidLoad NewPage');
  }

  go(){
    this.navCtrl.push('ListPage');
  }

   getNews() {
    this.getdata.getNews()
    .then(data => {
      this.news = data;
      console.log(this.news);
    });
  }


  doInfinite(infiniteScroll) {

console.log('Begin async operation');

setTimeout(() => {
for (let i = 0; i < 1; i++) {
 this.getNews();
}

console.log('Async operation has ended');
infiniteScroll.complete();
}, 500);
}

getCurrentLang(){
  
     this.lang = this.translate.getDefaultLang();
  
   }

   goToFull(data){
     this.navCtrl.push(FullNewPage, {data});
   }


  
}
