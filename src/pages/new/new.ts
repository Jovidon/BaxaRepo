import { Component } from '@angular/core';
import { GetdataProvider } from './../../providers/getdata/getdata';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { FullNewPage } from '../full-new/full-new';
import { SecureStorage, SecureStorageObject } from '@ionic-native/secure-storage';


@IonicPage()
@Component({
  selector: 'page-new',
  templateUrl: 'new.html',
})
export class NewPage {
  news : any  ;
  image : any [];
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public getdata : GetdataProvider,
    public translate : TranslateService,
    private secureStorage: SecureStorage) {
      this.create();

 }
  ionViewDidLoad() {
    console.log('ionViewDidLoad NewPage');
  }


  create() {
    this.secureStorage.create('my_store_name')
    .then((storage: SecureStorageObject) => {
  
       storage.get('key')
         .then(
           data => console.log(data),
           error => console.log(error)
       );
  
       storage.set('key', 'value')
         .then(
          data => console.log(data),
           error => console.log(error)
       );
  
       storage.remove('key')
       .then(
           data => console.log(data),
           error => console.log(error)
       );
  
    });
  }
}
