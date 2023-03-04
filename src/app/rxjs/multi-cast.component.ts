import { Component } from "@angular/core";
import { ReplaySubject, Subject } from "rxjs";
import { BehaviorSubject } from "rxjs";

@Component({

    selector:'app-multi',
    templateUrl:'multi-cast.component.html',
    styleUrls:[]
})

export class MultiCaste{
    ngOnInit(): void {
          //  let subject =  new Subject();
        // let subject = new BehaviorSubject<any>(0);
        let subject = new ReplaySubject()
    
       
       
        subject.subscribe((val)=>{
          console.log('first observer',val)
        })
    
        subject.next(1);
    
       
    
        subject.subscribe((val)=>{
          console.log('second observer',val)
        })
        subject.next(2);
        
    
        subject.subscribe((val)=>{
          console.log('third observer',val);
        })

        subject.next(3);
      }

}