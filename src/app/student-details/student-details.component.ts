import { Component, OnInit ,Output ,EventEmitter} from '@angular/core';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
Catogery = ["General","Muslim","OBC/SC/ST"];
DepartmentChoice = ["A","B","C","D","E"];
Gender = ["Male","Female"];
listOfAllStudent = new Array();
message = "";
@Output() public childEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }


onSubmit(f: NgForm) {

  this.listOfAllStudent.push(f.value);
// console.log(this.listOfAllStudent);
this.listOfAllStudent.sort((a,b)=>a.StudentMarks - b.StudentMarks);
this.childEvent.emit(this.listOfAllStudent);
}
}
