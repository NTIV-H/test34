import { Component } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 
  constructor(public platform: Platform, public nav: NavController) {}

  
  checkPlatform() {
    if (this.platform.is('mobile') === true) {
      return 'true';
    } else {
      return 'false';
    }
  }

  navPage(){
    this.nav.navigateForward('test')
  }
}
