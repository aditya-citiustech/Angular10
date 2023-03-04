import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpol',
  template: `
  <div style="text-align:center">
  <h4 style="color: skyblue">Interpolation</h4>
<p>It is a one-way data-binding technique that is used to transfer the 
  data from a TypeScript code to an HTML template (view). </p>
<sub>Example</sub>
<p>Hi my name is {{value}}</p>
</div>
   

  `,
  styles: [
  ]
})
export class InterpolComponent implements OnInit {

  public value="Aditya";
  constructor() { }

  ngOnInit(): void {
  }

}
