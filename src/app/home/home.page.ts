import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() {}

  // scrollNum = document.getElementById("myDial");  
  // scrollNum.addEventListener('scroll', functionName);


  ngOnInit() {

  }

  logScrollStart(){
    console.log("sda");
  }

  logScrolling(){
    console.log("sda");
  }

  logScrollEnd(){
    console.log("sda");
  }

  

  // var content = document.querySelector('ion-content');
  // content.scrollEvents = true;
  // content.addEventListener('ionScrollStart', () => console.log('scroll start'));
  // content.addEventListener('ionScroll', (ev) => console.log('scroll', ev.detail));
  // content.addEventListener('ionScrollEnd', () => console.log('scroll end'));

}




