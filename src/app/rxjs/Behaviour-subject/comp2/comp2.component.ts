import { Component, OnInit } from '@angular/core';
import { InputDataService } from '../inputData.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: []
})
export class Comp2Component implements OnInit {
c1val=''
  constructor(private inputService:InputDataService) { }

  ngOnInit(): void {

this.inputService.inputEmitter.subscribe((values)=>{
  this.c1val = values;
})
  }

}
