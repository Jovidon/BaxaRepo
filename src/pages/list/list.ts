import { Component } from '@angular/core';
import { GetdataProvider } from './../../providers/getdata/getdata';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
 items = [];
 news : any  ;
  title_ru : any [];
  title_uz : any [];
  content_uz : any [];
  content_ru : any [];
  category_id : any [];
  created_date : any [];
  image : any [];
  id : any [];

 constructor(public navCtrl: NavController, public navParams: NavParams,public getdata : GetdataProvider) {
for (let i = 0; i < 15; i++) {
this.items.push( this.items.length );

}
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
for (let i = 0; i < 15; i++) {
this.items.push( this.items.length );
}

console.log('Async operation has ended');
infiniteScroll.complete();
}, 500);
}

}
