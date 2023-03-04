import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  template: `
   <div style="text-align:center">
   <h4 style="color: skyblue">Class Binding</h4>
   <pre>We can set or remove the CSS class names from an element's 
   class attribute with the help of class binding.</pre>
   
   <sub>Example</sub>

   <p [class.Textcolr1]=true>Apply color property</p>
   

   <p [ngClass]="{'Textcolr1':person.Aditya==='UK',
                   'Textcolr2':person.Sri==='IND'}"
   >Person from UK</p>
   </div>
   <hr/>
  `,
  styles: [
    `
    .Textcolr1{
          color:red
    }
    .Textcolr2{
      color:green
}
    
    `
  ]
})
export class ClassBindingComponent implements OnInit {
person = {
Aditya:'UK',
Sri:'IND',
Rama:'USA'
}

  constructor() { }

  ngOnInit(): void {
  }

}
