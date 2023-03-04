import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mini',
  templateUrl: './mini.component.html',
  styleUrls: ['./mini.component.css']
})
export class MiniComponent implements OnInit {
counter=0;

  constructor() { }

  ngOnInit(): void {
  }

increment(){
  this.counter++;
}

decrement(){
  this.counter--;
}

}
