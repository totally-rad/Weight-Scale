import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  disablescreen = document.getElementById("myDial"); 

  constructor() {
    this.disablescreen.addEventListener('click', (e:Event) => this.userClicked());
  }

  userClicked(){
    console.log("clicked");
  }


  ngOnInit() {

  }

}




