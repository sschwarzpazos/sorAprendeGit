import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  texto:string = 'Soraya está aprendiendo git!!'

  constructor(public navCtrl: NavController) {

  }

}
