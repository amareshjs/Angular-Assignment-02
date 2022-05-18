import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-well-screen',
  templateUrl: './well-screen.component.html',
  styleUrls: ['./well-screen.component.scss']
})
export class WellScreenComponent implements OnInit {
  hour:number;
  greet: string="";
  
  
  constructor() { 
    
  this.hour= new Date().getHours();
  }

  ngOnInit(): void {
  }
  greeting(){
    if(this.hour>=0&&this.hour<12){
      this.greet="Good Morning";
    }
    else if(this.hour>=12&&this.hour<18){
      this.greet="Good AfterNoon";
    }else if(this.hour>=18&&this.hour<22){
      this.greet="Good Evening";
    }else if(this.hour>=22&&this.hour<24){
      this.greet="Good Night";
    }
    return this.greet;
  }

}
