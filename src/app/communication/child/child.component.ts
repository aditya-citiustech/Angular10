import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input() dataFromParent='';

@Output() outputEmitter : EventEmitter<string> = new EventEmitter();


outputData = 'Sriramaa'

  constructor() { }

  ngOnInit(): void {
  }

  sendToParent(){
this.outputEmitter.emit(this.outputData)
  }

}
