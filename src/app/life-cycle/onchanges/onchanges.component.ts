import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-onchanges',
  templateUrl: './onchanges.component.html',
  styleUrls: ['./onchanges.component.css']
})
export class OnchangesComponent implements OnInit,OnChanges {
@Input('dataValue') data:any
  constructor() { }

ngOnChanges(changes:SimpleChanges){
// let parentValue = this.data;
console.log('prevVal',changes['data'].previousValue)
console.log('currentVal',changes['data'].currentValue)

}

  ngOnInit(): void {
  }


}
