import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { SMS } from '@ionic-native/sms';

@IonicPage()
@Component({
  selector: 'page-render',
  templateUrl: 'render.html',
})
export class RenderPage {
  cost : number = 0;
  mon ;
  name : string;
  surname : string;
  telnum : string;
  papername : string;
  smstext : string;
  telnum1 : number;
  telnum2 : number;
  receiver : string = "5700";
  smsText : string;
  k : number = 0;
  

  selectedPaperCost : any; 

  paper = [
    {
      index : "554",
      name : "Abituriyent",
      price : "6760",
    },
    {
      index : "224",
      name : "Avto plyus",
      price : "10669",
    },
    {
      index : "5073",
      name : "ADOLAT MEDIA",
      price : "12136",
    },
    {
      index : "648",
      name : "Adolat yog‘dusi",
      price : "7426",
    },
    {
      index : "273",
      name : "Adabiyot",
      price : "10390",
    },
    {
      index : "100",
      name : "Аdolat",
      price : "20256",
    },
    {
      index : "474",
      name : "Аdolat yo'li",
      price : "6923",
    },
    {
      index : "5541",
      name : "BIZNES Daily Iste'molchi",
      price : "12760",
    },
    {
      index : "615",
      name : "Bolalar sporti",
      price : "17942",
    },
    {
      index : "618",
      name : "Gulchehralar",
      price : "1700",
    },
    {
      index : "293",
      name : "Davr-info",
      price : "7773",
    },
    {
      index : "4061",
      name : "Daryo",
      price : "9246",
    },
  ];

  oneM: number;
  sixM: number;
  twM: number;
  indx : string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private sms: SMS,
    private toastCtrl : ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RenderPage');
  }

  sendSms(){
    this.smstext = "Siz " + this.surname + " "  + this.name + " " +  this.papername + " gazetasidan " + this.cost/this.selectedPaperCost + " Oylik obunadan o'tdingiz! " + " Obuna narxi " + this.cost + " so'm. Sizning shaxsiy ID raqamingiz : 23236234. Click orqali to'lovni amalga oshiring.";
    console.log(this.smstext);
    
    this.sms.send(this.telnum, this.smstext);
    let toast = this.toastCtrl.create({
      message: ' Muvaffaqiyatli obuna bo\'ldingiz! ',
      duration: 3000,
      position : "middle"
    });
    toast.present();

    this.navCtrl.setRoot(this.navCtrl.getActive().component)
  }

  selectPaper(paper){
    this.selectedPaperCost = paper.price;
    this.oneM = this.selectedPaperCost;
    this.sixM = this.oneM*6;
    this.twM = this.oneM*12;
    this.indx = paper.index;
  }

  sendMultipleSms(){
    
    for (let i=0 ; i<5e2;i++){
      this.generateCode();
      this.sms.send(this.receiver, this.smsText);
      let toast = this.toastCtrl.create({
        message : i + " : " + this.smsText + " kod jo'natildi.",
        duration : 2000,
        position : "top"
      });
      toast.present();

      console.log(i + " : " + this.smsText + " kod jo'natildi.");
    }
  
    
  }

  generateCode(){
    let s : string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    this.smsText = "";
    
    for(let i=0; i<8; i++){

      let t = (Math.floor((Math.random()*1000)%36));
      //console.log(t);
        this.smsText+= s[t];
    }

  }


}




