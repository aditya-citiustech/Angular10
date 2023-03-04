import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  template: `
   <div>
   <h4>Two Way Binding using ngModel</h4>
   <pre>It is used for two way data binding which means 
   view to component and viceversa</pre>
 <sub>Example</sub>
 <br/>
 <input type='text' [(ngModel)] = "strValue"/>
 <p>{{strValue}}</p>
   </div>
   <hr/>
  `,
  styles: [
  ]
})
export class TwoWayBindingComponent implements OnInit {
  strValue:string='';
  constructor() { }

  ngOnInit(): void {
  }

}
