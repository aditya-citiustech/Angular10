import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mycomp',
  templateUrl: './mycomp.component.html',
  styleUrls: ['./mycomp.component.css']
})
export class MycompComponent implements OnInit {
  counter=0;
  myArray=[1,2,3,4,5]

  constructor() { }

  ngOnInit(): void {
  }
  Increment(){
    this.counter++;
    this.myArray.push(6);
  }

}
