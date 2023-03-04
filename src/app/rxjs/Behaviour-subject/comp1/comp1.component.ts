import { Component, OnInit } from '@angular/core';
import { InputDataService } from '../inputData.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: []
})
export class Comp1Component implements OnInit {
data=''
  constructor(private inputService:InputDataService) { }

  ngOnInit(): void {
  }

  sendComp2(values:string){
this.inputService.receiveData(values);
  }

}
