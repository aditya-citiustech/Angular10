import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-slot',
  templateUrl: './single-slot.component.html',
  styleUrls: ['./single-slot.component.css']
})
export class SingleSlotComponent implements OnInit {

  @Input() question?: string;
  @Input() questionNumber?: number;
  

  constructor() { }

  ngOnInit(): void {
  }

}
