import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
data = 'Aditya';
parentDa = '';
  constructor() { }

  ngOnInit(): void {
  }

  receiveChildData(dataC:any){
    this.parentDa = dataC
  }

}
