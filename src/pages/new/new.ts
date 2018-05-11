import { Component } from '@angular/core';
import { GetdataProvider } from './../../providers/getdata/getdata';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



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
  
  realNews : any ;
  items = [];
  

  constructor(public navCtrl: NavController, public navParams: NavParams,public getdata : GetdataProvider) {
    this.getNews();
    for (let i = 0; i < 30; i++) {
      this.items.push( this.items.length );
    }
    
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
  
    setTimeout(() => {
      this.getdata.getNews()
      .then(data => {
        this.news = data;
        //console.log(this.news);
        for(let i=0; i<this.news.length; i++) {
          this.realNews.push(this.news[i]);
        }

      });
         
     
      infiniteScroll.complete();
    }, 500);
  }

  
  
}
