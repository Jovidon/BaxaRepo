import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GetdataProvider} from './../../providers/getdata/getdata';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  users: any;
  serverdata : any;
  info : string;
  infosurname : string;
  
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

  Get(){
     this.getdata.getTimeTable().then(data => {
       this.timetable = data;
       console.log(data);
    });
  }



}
