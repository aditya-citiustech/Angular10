import { AfterViewInit, Component, OnInit, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-viewchildren',
  templateUrl: './viewchildren.component.html',
  styleUrls: ['./viewchildren.component.css']
})
export class ViewchildrenComponent implements OnInit,AfterViewInit {

@ViewChildren("colorChange")color! : QueryList<any>;

/* using @ViewChild get only single refernce but 
 @ViewChildren get multiple references */

  constructor() { }

  ngOnInit(): void {
  }

ngAfterViewInit(){
console.log('color',this.color);
// this.color.first.nativeElement.style.color = 'red'
// this.color.last.nativeElement.style.color='blue'
this.color["_results"].map((val:any)=>{
  val.nativeElement.style.color='red'

})
}

getCall(){
  console.log('Hi')
}

}
