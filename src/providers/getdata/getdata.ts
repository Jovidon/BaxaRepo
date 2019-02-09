import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { NavController, ToastController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { resolve } from 'path';

@Injectable()
export class GetdataProvider {

  data : string ="salom";
  link = "http://localhost:3333/announcement/1";
  logic : boolean;
  serverdata : any;
  linklocal = "http://192.168.137.1:3000/";
  newlink = "http://localhost:3333/"
   constructor(public http: HttpClient, private toast : ToastController) {

    // this.data = "Salom";
    //this.link = "http://192.168.137.1/api/";
    console.log('Hello GetdataProvider Provider');
  }
 
  getUsers() {
    return new Promise(resolve => {
      this.http.get(this.link+'users/get').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
  
  getNews(){
    return new Promise(resolve => {
      this.http.get(this.linklocal+'Tasks/').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });

  }

  getLess(){
    return new Promise(resolve => {
      this.http.get(this.link+'lessons/index').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });

  }

  post(param:object):Observable<any>{
    var myData = JSON.stringify({param});
    return this.http.post(this.linklocal+"Register/",param);
  }
 
 
  submit(login, password) {
    
 //   let info = login_in + " " +pass_in;
   var myData = JSON.stringify({login, password});

    this.http.post(this.link+'users/get', myData).subscribe( (data) =>{
      if(data){
          console.log(data);
          this.serverdata = data;
      }
   });

  let toast = this.toast.create({
    message : "Jo'natildi!",
    duration : 3000,
    position : 'bottom'
  });
  toast.present();
  }

apiUrl="http://wecode.uz/api/users/create";
registr(data) {
  return new Promise((resolve, reject) => {
    this.http.post(this.apiUrl, JSON.stringify(data))
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });
}
  postnew(param:object):Observable<any>{
    
    return this.http.post(this.newlink+"register",param);
  }

  getNotice(){
    var head = new HttpHeaders({
      'Content-Type': "application/json",
      "Authorization" : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZnVsbE5hbWVVeiI6IlZhbGl5ZXYgQWxpIiwiZnVsbE5hbWVSdSI6IlZhbGl5ZXYgQWxpIiwibG9naW4iOiJhIiwiYmlydGhkYXkiOiIyMDE4LTA3LTMxVDE5OjAwOjAwLjAwMFoiLCJHcm91cF9pZCI6MSwiaWF0IjoxNTM0MTg0NDc4LCJleHAiOjE1MzUyNjQ0Nzh9.LurG4rO0yAq1tD5CdEit8VtkzhTTGOlRLe-bdVDVTLU"
    });
    return new Promise(resolve => {
      this.http.get(this.link, {headers : head}).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
  
}
