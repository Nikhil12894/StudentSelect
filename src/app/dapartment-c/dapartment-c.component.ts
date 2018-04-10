import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dapartment-c',
  templateUrl: './dapartment-c.component.html',
  styleUrls: ['./dapartment-c.component.css']
})
export class DapartmentCComponent implements OnInit {
  @Input() general = [];
  @Input() mushlim = [];
  @Input() women = [];
  @Input() other = [];
  _mushlim = [];
  _women = [];
  _other = [];
  show: boolean = false;
  toggal: boolean = true;
    constructor() { }

    ngOnInit() {

    }
  onClick(){
    if(this.mushlim.length <=0){

    }else{
      for(let x of this.mushlim){
        this._mushlim.push(x[0]);
      }
    }

    if(this.women.length <=0){

    }else{
      for(let x of this.women){
        this._women.push(x[0]);
      }
    }

    if(this.other.length <=0){

    }else{
      for(let x of this.other){
        this._other.push(x[0]);
      }
    }
    this.show = true;
    this.toggal = true;
    // console.log(this._mushlim);
  }
  toggel(){
    this.toggal = !this.toggal;
  }

}
