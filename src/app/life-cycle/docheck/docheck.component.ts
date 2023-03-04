import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { ViewchildrenComponent } from 'src/app/view/viewchildren/viewchildren.component';

@Component({
  selector: 'app-docheck',
  templateUrl: './docheck.component.html',
  styleUrls: ['./docheck.component.css']
})
export class DocheckComponent implements OnInit ,DoCheck{
  @Input('arr') arr:any

classIns = new ViewchildrenComponent();

  constructor() { }



  ngOnInit(): void {
    this.classIns.getCall();
  }

  ngDoCheck(){
  console.log('myarr',this.arr)

  }

}
