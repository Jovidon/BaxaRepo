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

    // this.data = "Salom";
    this.link = "http://192.168.137.1/api/";
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
      this.http.get(this.link+'news/index').subscribe(data => {
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
 
 
  submit(login, password) {
    
 //   let info = login_in + " " +pass_in;
   var myData = JSON.stringify({login, password});

    this.http.post(this.link+'users/get', myData).subscribe( (data) =>{
      if(data){
          console.log(data);
          this.serverdata = data;
      }
   });



// const req = this.http.post('http://wecode.uz/api/users/create', {
//       login: login_in,
//       password: pass_in
//     })
//       .subscribe(
//         res => {
//           console.log(res);
//         },
//         err => {
//           console.log("Error occured");
//         }
//       );
//   }
  
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



  // registr(  first_name ,last_name, login, password,rate,role) {
    
  // //  let info = first_name + "@" +last_name+"@"+login + "@" +password + @;
  //  var myData = JSON.stringify({first_name,last_name,login,password,rate,role});

  //   this.http.post('http://wecode.uz/api/users/create', myData).subscribe( (data) =>{
  //     if(data){
  //         console.log(data);
  //         this.serverdata = data;
  //     }
  // });
  // }


}
