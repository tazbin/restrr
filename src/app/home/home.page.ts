import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  restTime: any = '00:00:00';
  minute: number;
  second: any;
  totalTime: number;

  timeSpend: any = {
    h: 0,
    m: 0,
    s: 0
  };

  goTimer: any = false;

  percent: number = 0;
  progress: number = 1;

  constructor() {}

  startTimer(){

    if( this.goTimer != false ){
      clearInterval(this.goTimer);
      this.restTime = '00:00:00';
      this.timeSpend = {
        h: 0,
        m: 0,
        s: 0
      };
      this.percent = 0;
  this.progress = 1;
  this.goTimer = false;

    } else{



      let timeSplit = this.restTime.split(':');
      this.minute = timeSplit[1];
      this.second = timeSplit[2];
      this.totalTime = Math.floor(this.minute*60) + parseInt(this.second);
    
    this.goTimer = setInterval(()=>{

      if( this.percent >= 100 ){
        clearInterval(this.goTimer);
      } else{
        this.percent = (this.progress/this.totalTime)*100;
      this.progress++;

      this.timeSpend.s++;
      if( this.timeSpend.s > 59 ){
        this.timeSpend.m++;
        this.timeSpend.s = 0
      }
      }
    }, 1000)



    }
  };

}
