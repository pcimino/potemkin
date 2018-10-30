import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { NavController  } from 'ionic-angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public navCtrl: NavController, private iab: InAppBrowser) {

  }

  ngOnInit(){
    // should it be _blank instead of _self ?
    const browser = this.iab.create('https://www.duckduckgo.com','_self',{location:'no'});

  }

}
