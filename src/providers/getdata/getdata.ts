import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { NavController, ToastController } from 'ionic-angular';
import 'rxjs/add/operator/map';

@Injectable()
export class GetdataProvider {

  data : string ="salom";
  link : string;
  logic : boolean;
  serverdata : any;

  constructor(public http: HttpClient, private toast : ToastController) {

    this.data = "Salom";
    this.link = "192.168.137.1/api.php"
    console.log('Hello GetdataProvider Provider');
  }
 
  getUsers() {
    return new Promise(resolve => {
      this.http.get('http://192.168.137.1/api.php').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
  
  getTimeTable(){
    return new Promise(resolve => {
      this.http.get('http://192.168.137.1/api.php').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });

  }
 
  submit(login, password) {
    
    let info = login + " " +password;
   var myData = JSON.stringify({info});

    this.http.post('http://192.168.137.1/api.php', myData).subscribe( (data) =>{
      if(data){
          console.log(data);
          this.serverdata = data;
      }
  });

  
    let toast = this.toast.create({
      message : "Jo'natildi!",
      duration : 3000,
      position : 'middle'
    });
    toast.present();
    


  }



  registr(  surname ,name, login, password) {
    
    let info = surname + "@" +name+"@"+login + "@" +password;
   var myData = JSON.stringify({info});

    this.http.post('http://192.168.137.1/api.php', myData).subscribe( (data) =>{
      if(data){
          console.log(data);
          this.serverdata = data;
      }
  });
  }
}
