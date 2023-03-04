import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { StyleBindingComponent } from '../../Bindings/style-binding/style-binding.component';
import { MiniComponent } from '../mini/mini.component';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.css']
})
export class ViewchildComponent implements OnInit,AfterViewInit {
  
tsvalue:any
@ViewChild('title') title! : ElementRef 
// @ViewChild('styling' ,{read: ElementRef}) styling!:ElementRef;
@ViewChild('mini') mini! : MiniComponent;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
console.log('title',this.title.nativeElement)
}

  Increment(){
    console.log('ibc')
this.mini.increment();
  }

  Decrement(){
this.mini.decrement();
  }

}

/*TO get ngModel value to ts file using viewChild
@ViewChild(NgModel) typeVal!:NgModel
console.log('type',this.typeVal.valueChanges?
.subscribe((vl)=>{console.log(vl)}))

 another approach Using keyup

 console.log('inputVal',this.inputVal.nativeElement.onkeyup=()=>{
   console.log(this.inputVal.nativeElement.value)
 })
*/







