import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content1',
  templateUrl: './content1.component.html',
  styleUrls: ['./content1.component.css']
})
export class Content1Component implements OnInit {

  counter:number = 0;
  address='india';
  comb : any;

  constructor() { }

  ngOnInit(): void {
  }

  Increment(){
    console.log('Increment')
    this.counter++;
    this.comb = this.counter + this.address
  }
}
