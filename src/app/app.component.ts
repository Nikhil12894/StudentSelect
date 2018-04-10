import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public Dapartment_A = new Array(4);
    public general_A = [];
    public mushlim_A = [];
    public women_A = [];
    public OBC_SC_ST_A = [];

  public Dapartment_B = new Array(4);
  public general_B = [];
  public mushlim_B = [];
  public women_B = [];
  public OBC_SC_ST_B = [];

  public Dapartment_C = new Array(4);
  public general_C = [];
  public mushlim_C = [];
  public women_C = [];
  public OBC_SC_ST_C = [];

  public Dapartment_D = new Array(4);
  public general_D = [];
  public mushlim_D = [];
  public women_D = [];
  public OBC_SC_ST_D = [];

  public Dapartment_E = new Array(4);
  public general_E = [];
  public mushlim_E = [];
  public women_E = [];
  public OBC_SC_ST_E = [];
  public list = [];
  disableButton1:boolean = false;

  onclick(){
    // var a = this.list.pop();
    // console.log(a);

    if(this.list.length === 0){
      // console.log("there is no student in the list")
      // Do Nothing
    }else{
start:  for(var i = this.list.length -1;i>=0;i--) {
        var c1:string = this.list[i].First_Choice;
        var c2:string = this.list[i].Second_Choice;
        var c3:string = this.list[i].Third_Choice;
        var c4:string = this.list[i].Fourth_Choice;
        var c5:string = this.list[i].Fifth_Choice;
        var catog:string= this.list[i].Catogery
// console.log(this.list[i]);
      var choice = [c1,c2,c3,c4,c5];
for(let c of choice){
  switch(c){
    case c1:
    if(this.list[i] === undefined){
      continue start;
    }else{
      if(this.general_A.length<20){
        var stdnt = this.list.pop();
        this.general_A.push(stdnt);
      }else if(this.mushlim_A.length<12 && catog === "Muslim"){
        var stdnt: any = this.list.splice(i, 1);
        this.mushlim_A.push(stdnt);
      }else if(this.OBC_SC_ST_A.length<4 && catog === "OBC/SC/ST"){
        var stdnt: any = this.list.splice(i, 1);
        this.OBC_SC_ST_A.push(stdnt);
      }else if(this.women_A.length<4 && this.list[i].Gender === "Female"){
        var stdnt: any = this.list.splice(i, 1);
        this.women_A.push(stdnt);
      }}
      break;
    case c2:
    if(this.list[i] === undefined){
      continue start;
    }else{
    if(this.general_B.length<20){
      var stdnt = this.list.pop();
      this.general_B.push(stdnt);
    }else if(this.mushlim_B.length<12 && this.list[i].Catogery === "Muslim"){
      var stdnt: any = this.list.splice(i, 1);
      this.mushlim_B.push(stdnt);
    }else if(this.OBC_SC_ST_B.length<4 && this.list[i].Catogery === "OBC/SC/ST"){
      var stdnt: any = this.list.splice(i, 1);
      this.OBC_SC_ST_B.push(stdnt);
    }else if(this.women_B.length<4 && this.list[i].Gender === "Female"){
      var stdnt: any = this.list.splice(i, 1);
      this.women_B.push(stdnt);
    }}
      break;
    case c3:
    if(this.list[i] === undefined){
      continue start;
    }else{
    if(this.general_C.length<20){
      var stdnt = this.list.pop();
      this.general_C.push(stdnt);
    }else if(this.mushlim_C.length<12 && this.list[i].Catogery === "Muslim"){
      var stdnt: any = this.list.splice(i, 1);
      this.mushlim_C.push(stdnt);
    }else if(this.OBC_SC_ST_C.length<4 && this.list[i].Catogery === "OBC/SC/ST"){
      var stdnt: any = this.list.splice(i, 1);
      this.OBC_SC_ST_C.push(stdnt);
    }else if(this.women_C.length<4 && this.list[i].Gender === "Female"){
      var stdnt: any = this.list.splice(i, 1);
      this.women_C.push(stdnt);
    }}
      break;
    case c4:
    if(this.list[i] === undefined){
      continue start;
    }else{
    if(this.general_D.length<20){
      var stdnt = this.list.pop();
      this.general_D.push(stdnt);
    }else if(this.mushlim_D.length<12 && this.list[i]["Catogery"] === "Muslim"){
      var stdnt: any = this.list.splice(i, 1);
      this.mushlim_D.push(stdnt);
    }else if(this.OBC_SC_ST_D.length<4 && this.list[i].Catogery === "OBC/SC/ST"){
      var stdnt: any = this.list.splice(i, 1);
      this.OBC_SC_ST_D.push(stdnt);
    }else if(this.women_D.length<4 && this.list[i].Gender === "Female"){
      var stdnt: any = this.list.splice(i, 1);
      this.women_D.push(stdnt);
    }}
      break;
    case c5:
    if(this.list[i] === undefined){
      continue start;
    }else{
    if(this.general_E.length<20){
      var stdnt = this.list.pop();
      this.general_E.push(stdnt);
    }else if(this.mushlim_E.length<12 && this.list[i].Catogery === "Muslim"){
      var stdnt: any = this.list.splice(i, 1);
      this.mushlim_E.push(stdnt);
    }else if(this.OBC_SC_ST_E.length<4 && this.list[i].Catogery === "OBC/SC/ST"){
      var stdnt: any = this.list.splice(i, 1);
      this.OBC_SC_ST_E.push(stdnt);
    }else if(this.women_E.length<4 && this.list[i].Gender === "Female"){
      var stdnt: any = this.list.splice(i, 1);
      this.women_E.push(stdnt);
    }}
      break;
    default:

      break;
  }
}

    }
    }
// console.log("Dap A");
// console.log(this.general_A);
// console.log(this.mushlim_A);
// console.log(this.OBC_SC_ST_A);
// console.log(this.women_A);
// console.log("Dap B");
// console.log(this.general_B);
// console.log(this.mushlim_B);
// console.log(this.OBC_SC_ST_B);
// console.log(this.women_B);
// console.log("Dap C");
// console.log(this.general_C);
// console.log(this.mushlim_C);
// console.log(this.OBC_SC_ST_C);
// console.log(this.women_C);
// console.log("Dap D");
// console.log(this.general_D);
// console.log(this.mushlim_D);
// console.log(this.OBC_SC_ST_D);
// console.log(this.women_D);
this.disableButton1 = true;
  }
disableButton:boolean = true;
desabled(){
  this.disableButton = !this.disableButton;
}

}
