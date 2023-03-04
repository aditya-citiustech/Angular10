import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prop-binding',
  template: `
   <div style = "text-align:center">
   <h4 style="color: skyblue">Property Binding</h4>
   <pre>Property Binding is a one-way data-binding technique.In property binding,
   we bind a property of a DOM element to a field 
   which is a defined property in our component TypeScript code</pre>
<br/>
<input [disabled] =bool  value='Property-Binding'/>
<input [disabled] =!bool  value='Property-Binding'/>

   </div> 
   <hr/>
  `,
  styles: [
  ]
})
export class PropBindingComponent implements OnInit {

public bool=true;

  constructor() { }

  ngOnInit(): void {
  }

}
