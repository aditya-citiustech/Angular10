import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  template: `
    <div style="text-align:center">
    <h3 style="color: skyblue">Style Binding</h3>
    <pre>
    Style binding is used to set a style of a view element. We can 
    set the inline styles of an HTML element using the style binding in angular.
    </pre>
    <sub>Example</sub>
    <p [style.text-align]="'center'">Aligning items center</p>
    <p [style.color]="val=='true'?'green':'red'" >Condional styling</p>
    
    </div>
    <hr/>
  `,
  styles: [
  ]
})
export class StyleBindingComponent implements OnInit {

  val = 'true'
  
  constructor() { }

  ngOnInit(): void {
  }

}
