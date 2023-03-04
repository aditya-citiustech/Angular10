import { AfterContentChecked, AfterContentInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content2',
  templateUrl: './content2.component.html',
  styleUrls: ['./content2.component.css']
})
export class Content2Component implements OnInit, AfterContentInit, AfterContentChecked{
@Input() comb:any;
incBYTwo:any;
  constructor() { }

  ngOnInit(): void {
  }

ngAfterContentInit(){
  console.log('ngAfterContentInit',this.comb)

}

ngAfterContentChecked(){
  console.log('AfterContent Checked',this.comb)


}

}
